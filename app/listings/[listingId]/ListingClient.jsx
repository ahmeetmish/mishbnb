'use client'

import { useMemo } from "react"

import { Reservation } from "@prisma/client"

import Container from "@/app/components/Container"
import { categories } from "@/app/components/navbar/Categories"

import ListingHead from "../../components/listings/ListingHead"
import ListingInfo from "@/app/components/listings/ListingInfo"

export default function ListingClient({ listing, currentUser }) {
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category)
  }, [listing.category])

  return (
    <div>
      <Container>
        <div className="max-w-screen-lg mx-auto">
          <div className="gap-6 flex flex-col">
            <ListingHead title={listing.title} id={listing.id} imageSrc={listing.imageSrc} locationValue={listing.locationValue} currentUser={currentUser} />
            <div className="grid grid-cols-1 md:grid-cols-7 mt-6">
              <ListingInfo user={listing.user} description={listing.description} category={category} guestCount={listing.guestCount} roomCount={listing.roomCount} bathroomCount={listing.bathroomCount} locationValue={listing.locationValue} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}