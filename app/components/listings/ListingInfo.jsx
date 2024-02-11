'use client'

import dynamic from "next/dynamic"

import Avatar from "../Avatar"
import ListingCategory from "./ListingCategory"

import useCountries from "@/app/hooks/useCountries"

const Map = dynamic(() => import('../Map'), {
  ssr: false
})

export default function ListingInfo({ user, description, category, guestCount, roomCount, bathroomCount, locationValue }) {
  const { getByValue } = useCountries()

  const coordinates = getByValue(locationValue)?.latlng

  return (
    <div className="gap-8 flex flex-col col-span-4">
      <div className="gap-2 flex flex-col">
        <div className="gap-2 flex flex-row items-center font-semibold text-xl">
          <Avatar src={user?.image} />
          <div>Ev Sahibi: {user?.name}</div>
        </div>
        <div className="gap-4 flex flex-row font-light text-neutral-500">
          <div>
            {guestCount} misafir
          </div>
          <div>
            {roomCount} oda
          </div>
          <div>
            {bathroomCount} yatak odası
          </div>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory label={category.label} description={category.description} Icon={category.icon} />
      )}
      <hr />
      <div className="font-light text-lg text-neutral-500">
        {description}
      </div>
      <hr />
      <Map center={coordinates} />
    </div>
  )
}