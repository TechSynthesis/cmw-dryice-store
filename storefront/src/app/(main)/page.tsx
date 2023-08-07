import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import ProductsRefinementList from "@modules/store/components/products-refinement-list"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description: `Shop everything dry ice available only at ${process.env.NEXT_PUBLIC_COMPANY_NAME} . India-wide Shipping. Secure Payment. Powered by TechInverted`,
}

const Home = () => {
  return (
    <>
      <Hero />
      <ProductsRefinementList />
      <FeaturedProducts />
    </>
  )
}

export default Home
