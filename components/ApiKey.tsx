import React from 'react'
import ButtonCustom from './ButtonCustom'
import { Trash2Icon } from 'lucide-react'

const ApiKey = ({ value }: {value: String}) => {
  return (
    <div className="pt-6 pb-4 border-b-[1.8px] border-b-gray-200 flex">
      <p className="text-sm font-bold my-2">
        {value}
      </p>

      <div className="pl-8">
        <ButtonCustom
          type="button"
          variant="bg-red-500"
          text="remove"
          icon={<Trash2Icon />}
        />
      </div>
    </div>
  )
}

export default ApiKey