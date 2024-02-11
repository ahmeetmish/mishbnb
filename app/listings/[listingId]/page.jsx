import ClientOnly from "@/app/components/ClientOnly"
import EmptyState from "@/app/components/EmptyState"

import getListingById from "@/app/actions/getListingById"
import getCurrentUser from "@/app/actions/getCurrentUser"

import ListingClient from "./ListingClient"

export default async function ListingPage({ params }) {
  const listing = await getListingById(params)
  const currentUser = await getCurrentUser()

  if(!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <ListingClient listing={listing} currentUser={currentUser} />
    </ClientOnly>
  )
}