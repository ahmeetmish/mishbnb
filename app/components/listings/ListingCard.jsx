'use client'

import { Listing, Reservation } from "@prisma/client"
import useCountries from "@/app/hooks/useCountries"

import HeartButton from "../HeartButton"
import Button from "../Button"

import { useRouter } from "next/navigation"
import { useCallback, useMemo } from "react"
import { format } from 'date-fns'
import Image from "next/image"

export default function ListingCard({ data, reservation, onAction, actionLabel, actionId, disabled, currentUser }) {
  const router = useRouter()
  const { getByValue } = useCountries()

  const location = getByValue(data.locationValue)

  const handleCancel = useCallback((event) => {
    event.stopPropagation()

    if(disabled) {
      return
    }

    onAction(actionId)
  }, [disabled, onAction, actionId])

  const price = useMemo(() => {
    if(reservation) {
      return reservation.totalPrice
    }

    return data.price
  }, [reservation, data.price])

  const reservationDate = useMemo(() => {
    if(!reservation) {
      return null
    }

    const start = new Date(reservation.startDate)
    const end = new Date(reservation.endDate)

    return `${format(start, 'PP')} - ${format(end, 'PP')}`
  }, [reservation])

  return (
    <div className="group col-span-1 cursor-pointer"
      onClick={() => router.push(`/listings/${data.id}`)}>
        <div className="gap-1 flex flex-col w-full">
          <div className="relative w-full aspect-square rounded-xl overflow-hidden">
            <Image src={data.imageSrc} className="w-full h-full group-hover:scale-110 object-cover transition" fill alt="Listing" />
            <div className="absolute top-3 right-3">
              <HeartButton listingId={data.id} currentUser={currentUser} />
            </div>
          </div>
          <div className="font-semibold text-lg">
            {location?.region}, {location?.label}
          </div>
          <div className="font-light text-neutral-500">
            {reservationDate || data.category}
          </div>
          <div className="gap-1 flex flex-row items-center">
            <div className="font-semibold">
              $ {price}
            </div>
            {!reservation && (
              <div className="font-light">
                gece
              </div>
            )}
          </div>
          {onAction && actionLabel && (
            <Button disabled={disabled} small label={actionLabel} onClick={handleCancel} />
          )}
        </div>
    </div>
  )
}