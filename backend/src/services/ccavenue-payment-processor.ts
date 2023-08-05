import {
  AbstractPaymentProcessor,
  PaymentProcessorContext,
  PaymentProcessorError,
  PaymentProcessorSessionResponse,
  PaymentSessionStatus,
} from "@medusajs/medusa";

export const ErrorCodes = {
  PAYMENT_INTENT_UNEXPECTED_STATE: "payment_intent_unexpected_state",
  UNSUPPORTED_OPERATION: "payment_intent_operation_unsupported",
};

const ccavenue = require("node-ccavenue");

const ccav = new ccavenue.Configure({
  merchant_id: process.env.MERCHANT_ID,
  working_key: process.env.WORKING_KEY,
});

// type PaymentProcessorSessionResponse = {
//   update_requests?: {
//     customer_metadata?: Record<string, unknown>;
//   };
//   session_data: Record<string, unknown>;
// };

class CcavenuePaymentProcessor extends AbstractPaymentProcessor {
  static identifier = "ccavenue";

  async initiatePayment(
    context: PaymentProcessorContext
  ): Promise<PaymentProcessorError | PaymentProcessorSessionResponse> {
    const {
      context: cart_context,
      currency_code,
      amount,
      resource_id,
      customer: { email, phone, billing_address },
    } = context;
    // const { cart } = context;
    const orderDetails = {
      merchant_id: process.env.MERCHANT_ID,
      order_id: cart_context.id,
      currency: "INR",
      amount: amount,
      redirect_url: encodeURIComponent(
        `http://localhost:9003/api/handle-response`
      ),
      cancel_url: encodeURIComponent(
        `http://localhost:9003/api/handle-response`
      ),
      language: "EN",
      integration_type: "iframe_normal",
    };
    // currency: currency_code.toUpperCase(),
    //   cancel_url: YOUR_CANCEL_URL,
    //   billing_name:
    //     billing_address.first_name + " " + billing_address.last_name,
    //   billing_email: email,
    //   billing_tel: phone,
    //   billing_address: address_1,
    //   billing_city: city,
    //   billing_state: province,
    //   billing_zip: "400050",
    //   billing_country: country_code,

    // Use node-ccavenue's getEncryptedOrder method to encrypt the order details
    const encryptedData = ccav.getEncryptedOrder(orderDetails);
    const paymentUrl = `https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction&merchant_id=${process.env.MERCHANT_ID}&encRequest=${encryptedData}&access_code=${process.env.ACCESS_KEY}`;
    console.log(paymentUrl);
    var contents = {
      url: paymentUrl,
    };
    // return { status: "requires_action", data: { encryptedData } };
    return { session_data: { contents } };
  }

  async retrievePayment(paymentSessionData: Record<string, unknown>) {
    return paymentSessionData;
  }

  async capturePayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    throw new Error("Method not implemented.");
  }
  async authorizePayment(
    paymentSessionData: Record<string, unknown>,
    context: Record<string, unknown>
  ): Promise<
    | PaymentProcessorError
    | {
        status: PaymentSessionStatus;
        data: Record<string, unknown>;
      }
  > {
    const status = await this.getPaymentStatus(paymentSessionData);
    return { data: paymentSessionData, status };
  }

  async cancelPayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<
    PaymentProcessorError | PaymentProcessorSessionResponse["session_data"]
  > {
    const error: PaymentProcessorError = {
      error: "Unable to cancel as ccavenue doesn't support cancellation",
      code: ErrorCodes.UNSUPPORTED_OPERATION,
    };
    return error;
  }
  async deletePayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<
    PaymentProcessorError | PaymentProcessorSessionResponse["session_data"]
  > {
    // return await this.cancelPayment(paymentSessionData)
    return paymentSessionData;
  }
  async getPaymentStatus(
    paymentSessionData: Record<string, unknown>
  ): Promise<PaymentSessionStatus> {
    // const id = paymentSessionData.id as string;
    // const paymentIntent = await this.razorpay_.orders.fetch(id);
    //  switch (paymentIntent.status) {
    //   // created' | 'authorized' | 'captured' | 'refunded' | 'failed'
    //   case "created":
    //     return PaymentSessionStatus.REQUIRES_MORE;

    //   case "paid":
    //     return PaymentSessionStatus.AUTHORIZED;

    //   case "attempted":
    //     return await this.getRazorpayPaymentStatus(paymentIntent);

    //   default:
    //     return PaymentSessionStatus.PENDING;
    // }
    // return PaymentSessionStatus.PENDING;
    throw new Error("Method not implemented.2");
  }
  async refundPayment(
    paymentSessionData: Record<string, unknown>,
    refundAmount: number
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    throw new Error("Method not implemented.2");
  }
  async updatePayment(
    context: PaymentProcessorContext
  ): Promise<
    void | PaymentProcessorError | PaymentProcessorSessionResponse | void
  > {
    try {
      const { currency_code, amount } = context;
      const id = context.paymentSessionData.id as string;

      return { session_data: context.paymentSessionData };
    } catch (error) {
      return await this.initiatePayment(context).catch(() => {
        throw new Error("An error occurred in updatePayment");
      });
    }
  }
}

export default CcavenuePaymentProcessor;
