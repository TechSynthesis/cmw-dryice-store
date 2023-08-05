import { StoreGetProductsParams } from "@medusajs/medusa"
import { useCollections } from "medusa-react"
import { ChangeEvent } from "react"

type RefinementListProps = {
  refinementList: StoreGetProductsParams
  setRefinementList: (refinementList: StoreGetProductsParams) => void
}

const RefinementList = ({
  refinementList,
  setRefinementList,
}: RefinementListProps) => {
  const { collections, isLoading } = useCollections()

  const handleCollectionChange = (
    e: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const { checked } = e.target

    const collectionIds = refinementList.collection_id || []

    const exists = collectionIds.includes(id)

    if (checked && !exists) {
      setRefinementList({
        ...refinementList,
        collection_id: [...collectionIds, id],
      })

      return
    }

    if (!checked && exists) {
      setRefinementList({
        ...refinementList,
        collection_id: collectionIds.filter((c) => c !== id),
      })

      return
    }

    return
  }

  return (
    <div>
      <div className="px-8 py-8  small:pr-0 small:pl-8 small:min-w-[250px]">
        <div className="flex gap-x-3 small:flex-col small:gap-y-3">
          {/* <span className="text-base-semi">Categories</span> */}
          <ul className="text-base-regular flex items-center gap-x-4 small:grid small:grid-cols-3 small:gap-y-2 ">
            {collections?.map((c) => (
              <li
                key={c.id}
                className="flex justify-center items-center min-h-[40px] cursor-pointer text-sm leading-4 ml-2 mr-0 mt-3.5 mb-1.5 px-[19px] py-[11px] rounded-[100px] border border-solid border-[#A3C4DC] shadow-[0_0_1rem_0_rgba(0,0,0,0.05)] bg-[rgba(222,238,250,0.5)] backdrop-blur-[5px] hover:bg-blue-50"
              >
                <label className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    checked={refinementList.collection_id?.includes(c.id)}
                    onChange={(e) => handleCollectionChange(e, c.id)}
                    className="accent-blue-200"
                  />
                  {c.title}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RefinementList
