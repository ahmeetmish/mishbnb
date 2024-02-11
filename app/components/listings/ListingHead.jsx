'use client'

import Image from "next/image"

import Heading from "../Heading"
import HeartButton from "../HeartButton"

import useCountries from "@/app/hooks/useCountries"

export default function ListingHead({ title, id, imageSrc, locatinValue, currentUser }) {
  const { getByValue } = useCountries()

  const location = getByValue(locatinValue)

  return (
    <>
      <Heading title={title} subtitle={`${location?.region}, ${location?.label}`} />
      <div className="relative w-full h-[60vh] rounded-xl overflow-hidden">
        <Image src={imageSrc} fill className="object-cover w-full" alt="Image" />
        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  )
}