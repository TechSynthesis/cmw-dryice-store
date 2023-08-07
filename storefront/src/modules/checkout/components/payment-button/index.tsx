import { useCheckout } from "@lib/context/checkout-context"
import { PaymentSession } from "@medusajs/medusa"
import Button from "@modules/common/components/button"
import Modal from "@modules/common/components/modal"
import Spinner from "@modules/common/icons/spinner"
import { OnApproveActions, OnApproveData } from "@paypal/paypal-js"
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"
import { useElements, useStripe } from "@stripe/react-stripe-js"
import { useCart } from "medusa-react"
import React, { useCallback, useEffect, useState } from "react"
import useRazorpay, { RazorpayOptions } from "react-razorpay"

type PaymentButtonProps = {
  paymentSession?: PaymentSession | null
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ paymentSession }) => {
  const [notReady, setNotReady] = useState(true)
  const { cart } = useCart()

  useEffect(() => {
    setNotReady(true)

    if (!cart) {
      return
    }

    if (!cart.shipping_address) {
      return
    }

    if (!cart.billing_address) {
      return
    }

    if (!cart.email) {
      return
    }

    if (cart.shipping_methods.length < 1) {
      return
    }

    setNotReady(false)
  }, [cart])

  switch (paymentSession?.provider_id) {
    // case "stripe":
    //   return (
    //     <StripePaymentButton session={paymentSession} notReady={notReady} />
    //   )
    // case "razorpay":
    //   return (
    //     <RazorpayPaymentButton notReady={notReady} session={paymentSession} />
    //   )
    case "ccavenue":
      return <CCPaymentButton notReady={notReady} session={paymentSession} />
    case "manual":
      return <ManualTestPaymentButton notReady={notReady} />
    // case "paypal":
    //   return (
    //     <PayPalPaymentButton notReady={notReady} session={paymentSession} />
    //   )
    default:
      return <Button disabled>Select a payment method</Button>
  }
}

const StripePaymentButton = ({
  session,
  notReady,
}: {
  session: PaymentSession
  notReady: boolean
}) => {
  const [disabled, setDisabled] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  )

  const { cart } = useCart()
  const { onPaymentCompleted } = useCheckout()

  const stripe = useStripe()
  const elements = useElements()
  const card = elements?.getElement("cardNumber")

  useEffect(() => {
    if (!stripe || !elements) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [stripe, elements])

  const handlePayment = async () => {
    setSubmitting(true)

    if (!stripe || !elements || !card || !cart) {
      setSubmitting(false)
      return
    }

    await stripe
      .confirmCardPayment(session.data.client_secret as string, {
        payment_method: {
          card: card,
          billing_details: {
            name:
              cart.billing_address.first_name +
              " " +
              cart.billing_address.last_name,
            address: {
              city: cart.billing_address.city ?? undefined,
              country: cart.billing_address.country_code ?? undefined,
              line1: cart.billing_address.address_1 ?? undefined,
              line2: cart.billing_address.address_2 ?? undefined,
              postal_code: cart.billing_address.postal_code ?? undefined,
              state: cart.billing_address.province ?? undefined,
            },
            email: cart.email,
            phone: cart.billing_address.phone ?? undefined,
          },
        },
      })
      .then(({ error, paymentIntent }) => {
        if (error) {
          const pi = error.payment_intent

          if (
            (pi && pi.status === "requires_capture") ||
            (pi && pi.status === "succeeded")
          ) {
            onPaymentCompleted()
          }

          setErrorMessage(error.message)
          return
        }

        if (
          (paymentIntent && paymentIntent.status === "requires_capture") ||
          paymentIntent.status === "succeeded"
        ) {
          return onPaymentCompleted()
        }

        return
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  return (
    <>
      <Button
        disabled={submitting || disabled || notReady}
        onClick={handlePayment}
      >
        {submitting ? <Spinner /> : "Checkout"}
      </Button>
      {errorMessage && (
        <div className="text-red-500 text-small-regular mt-2">
          {errorMessage}
        </div>
      )}
    </>
  )
}

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || ""

const PayPalPaymentButton = ({
  session,
  notReady,
}: {
  session: PaymentSession
  notReady: boolean
}) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  )

  const { cart } = useCart()
  const { onPaymentCompleted } = useCheckout()

  const handlePayment = async (
    _data: OnApproveData,
    actions: OnApproveActions
  ) => {
    actions?.order
      ?.authorize()
      .then((authorization) => {
        if (authorization.status !== "COMPLETED") {
          setErrorMessage(`An error occurred, status: ${authorization.status}`)
          return
        }
        onPaymentCompleted()
      })
      .catch(() => {
        setErrorMessage(`An unknown error occurred, please try again.`)
      })
      .finally(() => {
        setSubmitting(false)
      })
  }
  return (
    <PayPalScriptProvider
      options={{
        "client-id": PAYPAL_CLIENT_ID,
        currency: cart?.region.currency_code.toUpperCase(),
        intent: "authorize",
      }}
    >
      {errorMessage && (
        <span className="text-rose-500 mt-4">{errorMessage}</span>
      )}
      <PayPalButtons
        style={{ layout: "horizontal" }}
        createOrder={async () => session.data.id as string}
        onApprove={handlePayment}
        disabled={notReady || submitting}
      />
    </PayPalScriptProvider>
  )
}

// const RazorpayPaymentButton = ({
//   session,
//   notReady,
// }: {
//   session: PaymentSession
//   notReady: boolean
// }) => {
//   const [submitting, setSubmitting] = useState(false)
//   const [errorMessage, setErrorMessage] = useState<string | undefined>(
//     undefined
//   )
//   const Razorpay = useRazorpay()

//   const { cart } = useCart()
//   const { onPaymentCompleted, updatePaymentSession } = useCheckout()
//   const orderData = session.data as Record<string, string>
//   const handlePayment = useCallback(() => {
//     const options: RazorpayOptions = {
//       key: process.env.NEXT_PUBLIC_RAZORPAY_API || "",
//       amount: session.amount.toString(),
//       currency: orderData.currency.toLocaleUpperCase(),
//       name: process.env.NEXT_PUBLIC_COMPANY_NAME ?? "CMW",
//       description: `Order number ${orderData.id}`,
//       //image: "https://example.com/your_logo",
//       order_id: orderData.id,

//       prefill: {
//         name:
//           cart?.billing_address.first_name +
//           " " +
//           cart?.billing_address.last_name,
//         email: cart?.email,
//         contact: cart?.shipping_address?.phone ?? undefined,
//       },
//       notes: {
//         address: cart?.billing_address,
//         order_notes: session.data.notes,
//       },
//       theme: {
//         color: "1234",
//       },
//       modal: {
//         ondismiss: (() => {
//           console.log("dismissed payment")
//           setSubmitting(false)
//           return false
//         })(),
//       },
//       handler: async (response) => {
//         console.log(response)

//         if (!response) {
//           const error = "razorpay unsuccessful"
//           console.log(error)
//           setErrorMessage(error)
//           setSubmitting(false)
//           return
//         } else {
//           updatePaymentSession(
//             "razorpay",
//             response as unknown as StorePostCartsCartPaymentSessionUpdateReq
//           )
//           onPaymentCompleted()
//         }
//         return
//       },
//     }

//     const razorpay = new Razorpay(options)
//     razorpay.on("payment.submit", function (data: { method: string }) {
//       if (data.method === "bank_transfer") {
//         console.log("initiating bank transfer")
//       }
//     })
//     razorpay.on("virtual_account.credited", function () {
//       onPaymentCompleted()
//     })
//     razorpay.open()
//   }, [Razorpay])
//   return (
//     <>
//       <button
//         className="w-full uppercase flex items-center justify-center min-h-[50px] px-5 py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50 text-white bg-gray-900 border-gray-900 hover:bg-white hover:text-gray-900 disabled:hover:bg-gray-900 disabled:hover:text-white rounded-full"
//         onClick={handlePayment}
//         disabled={notReady || submitting}
//       >
//         Pay with Razorpay
//       </button>
//     </>
//   )
// }
const CCPaymentButton = ({
  session,
  notReady,
}: {
  session: PaymentSession
  notReady: boolean
}) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  )

  const { cart } = useCart()
  const { onPaymentCompleted } = useCheckout()
  const orderData = session.data as Record<string, any>

  const [encReqURL, setEncReqURL] = React.useState("")
  const [hasIFrameLoaded, setHasIFrameLoaded] = React.useState(false)
  const handlePayment = useCallback(() => {
    try {
      setSubmitting(true)
      setEncReqURL(orderData?.contents?.url)
      if (!cart) {
        setSubmitting(false)
        return false
      }

      return
    } catch (error) {
      console.error("there is an error")
      setErrorMessage("Issue with payment")
      setSubmitting(false)
      return false
    }
  }, [cart, orderData])
  return (
    <>
      <Button onClick={handlePayment} disabled={notReady || submitting}>
        Checkout with CCAvenue
      </Button>
      <div>
        {!hasIFrameLoaded && (
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">
                <Spinner />{" "}
              </span>
            </div>
          </div>
        )}
        {encReqURL && (
          <div
            className="modal-content "
            style={{ height: "700px", width: "650px" }}
          >
            <Modal
              size="large"
              isOpen={submitting}
              close={() => setSubmitting(false)}
            >
              <Modal.Title>Make Payment</Modal.Title>
              <Modal.Body>
                <div id="paymentDiv"></div>
                <iframe
                  title="ccavenue"
                  onLoad={() => setHasIFrameLoaded(true)}
                  width="100%"
                  style={{
                    height: `${hasIFrameLoaded ? "650px" : "0px"}`,
                  }}
                  scrolling="Yes"
                  frameBorder="0"
                  id="paymentFrame"
                  src={encReqURL}
                />
              </Modal.Body>
            </Modal>
          </div>
        )}
      </div>
    </>
  )
}

const ManualTestPaymentButton = ({ notReady }: { notReady: boolean }) => {
  const [submitting, setSubmitting] = useState(false)

  const { onPaymentCompleted } = useCheckout()

  const handlePayment = () => {
    setSubmitting(true)

    onPaymentCompleted()

    setSubmitting(false)
  }

  return (
    <Button disabled={submitting || notReady} onClick={handlePayment}>
      {submitting ? <Spinner /> : "Checkout"}
    </Button>
  )
}

export default PaymentButton
