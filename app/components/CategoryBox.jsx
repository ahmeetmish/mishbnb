'use client'

import qs from 'query-string'
import { useCallback } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function CategoryBox({ label, Icon, selected }) {
  const router = useRouter()
  const params = useSearchParams()

  const handleClick = useCallback(() => {
    let currentQuery = {}

    if(params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery = {
      ...currentQuery,
      category: label
    }

    if(params?.get('category') === label) {
      delete updatedQuery.category
    }

    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery
    }, { skipNull: true })

    router.push(url)
  }, [router, params, label])

  return (
    <div onClick={handleClick} className={`gap-2 flex flex-col items-center justify-center p-3 border-b-2 hover:text-neutral-800 cursor-pointer transition
      ${selected ? 'border-b-neutral-800' : 'border-transparent'} ${selected ? 'text-neutral-800' : 'text-neutral-500'}
    `}>
      <Icon size={26} />
      <div className="font-medium text-xs">
        {label}
      </div>
    </div>
  )
}