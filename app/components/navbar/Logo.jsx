'use client'

import { useRouter } from "next/navigation"

export default function Logo() {
  const router = useRouter()

  return (
    <div onClick={() => router.push('/')} className="flex items-center justify-center cursor-pointer">
      <h2 className="text-indigo-700 text-xl font-bold">m<span className="hidden lg:inline">ishbnb</span></h2>
    </div>
  )
}