'use client'

import { useCallback } from "react"

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

export default function Counter({ title, onChange, value }) {
  const onAdd = useCallback(() => {
    onChange(value + 1)
  }, [value, onChange])

  const onReduce = useCallback(() => {
    if(value === 1) {
      return
    }

    onChange(value - 1)
  }, [value, onChange])

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="font-normal text-lg">
          {title}
        </div>
      </div>
      <div className="gap-4 flex flex-row items-center">
        <div onClick={onReduce}
         className="w-10 h-10 flex items-center justify-center border-[1px] border-neutral-400 rounded-full text-neutral-600 hover:opacity-80 cursor-pointer transition"
        >
          <AiOutlineMinus />
        </div>
        <div className="font-light text-xl text-neutral-600">
          {value}
        </div>
        <div onClick={onAdd}
         className="w-10 h-10 flex items-center justify-center border-[1px] border-neutral-400 rounded-full text-neutral-600 hover:opacity-80 cursor-pointer transition"
        >
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  )
}