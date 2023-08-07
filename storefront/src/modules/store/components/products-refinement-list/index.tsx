"use client"

import { StoreGetProductsParams } from "@medusajs/medusa"
import InfiniteProducts from "@modules/products/components/infinite-products"
import RefinementList from "@modules/store/components/refinement-list"
import { useState } from "react"

const ProductsRefinementList = () => {
  const [params, setParams] = useState<StoreGetProductsParams>({})

  return (
    <div className="flex md:flex-col md:items-center gap-8 sm:flex-row sm:items-start py-6">
      <RefinementList refinementList={params} setRefinementList={setParams} />
      <InfiniteProducts params={params} />
    </div>
  )
}

export default ProductsRefinementList
