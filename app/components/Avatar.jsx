'use client'

import Image from "next/image"

export default function Avatar({ src }) {
  return (
    <Image className="rounded-full" width='28' height='28' alt='Avatar' src={src || '/images/user.svg'} />
  )
}