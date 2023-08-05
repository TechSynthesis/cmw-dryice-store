import { StoreGetProductsParams } from "@medusajs/medusa"
import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Layout from "@modules/layout/templates"
import InfiniteProducts from "@modules/products/components/infinite-products"
import { ReactElement, useState } from "react"
import RefinementList from "@modules/store/components/refinement-list"
import { NextPageWithLayout } from "types/global"

const Home: NextPageWithLayout = () => {
  const [params, setParams] = useState<StoreGetProductsParams>({})
  return (
    <>
      <Head
        title="Home"
        description="Shop all available models only at the CMW Co2 Technologies. Mumbai wide Shipping. Secure Payment."
      />
      <Hero />
      <div className="py-12">
        <div className="content-container py-12">
          <div className="flex md:flex-col md:items-center sm:flex-row sm:items-start">
            <RefinementList
              refinementList={params}
              setRefinementList={setParams}
            />
            <InfiniteProducts params={params} />
          </div>
        </div>
      </div>
      <FeaturedProducts />
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
