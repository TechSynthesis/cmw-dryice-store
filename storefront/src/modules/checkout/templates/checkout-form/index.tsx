import Addresses from "@modules/checkout/components/addresses"
import Payment from "@modules/checkout/components/payment"
import Shipping from "@modules/checkout/components/shipping"
import { useCart } from "medusa-react"

const CheckoutForm = () => {
  const { cart } = useCart()

  if (!cart?.id) {
    return null
  }

  return (
    <div>
      <div className="w-full grid grid-cols-1 gap-y-8 ">
        <div>
          <Addresses />
        </div>

        <div>
          <Shipping cart={cart} />
        </div>

        <div className="md:sticky top-0 pt-2 h-fit sm:relative">
          <Payment />
        </div>
      </div>
    </div>
  )
}

export default CheckoutForm
