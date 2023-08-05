import NativeSelect from "@modules/common/components/native-select"
import React from "react"

type QuantitySelectProps = {
  quantity: number
  setQuantity: (quantity: number) => void
}

const QuantitySelect: React.FC<QuantitySelectProps> = ({
  quantity,
  setQuantity,
}) => {
  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-base-semi">Select Quantity</span>
      <NativeSelect
        value={quantity}
        onChange={(value) => setQuantity(parseInt(value.target.value))}
        className="max-h-[35px] w-[75px]"
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </NativeSelect>
    </div>
  )
}

export default QuantitySelect
