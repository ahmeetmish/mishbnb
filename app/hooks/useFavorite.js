import { toast } from "react-hot-toast" 
import { useRouter } from "next/navigation"
import { useCallback, useMemo } from "react"

import useLoginModal from "./useLoginModal"

const useFavorite = ({ listingId, currentUser }) => {
  const router = useRouter()
  const loginModal = useLoginModal()

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || []

    return list.includes(listingId)
  }, [listingId, currentUser])

  const handleFavorite = useCallback(async(event) => {
    event.stopPropagation()

    if(!currentUser) {
      return loginModal.onOpen()
    }

    try {
      let request

      if(hasFavorited) {
        request = () => fetch(`/api/favorites/${listingId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          }
        })
      } else {
        request = () => fetch(`/api/favorites/${listingId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          }
        })
      }

      await request()
      router.refresh()
      toast.success('Başarılı!')
    } catch(error) {
      toast.error('Bir şeyler ters gitti!')
    }
  }, [hasFavorited, loginModal, currentUser, listingId, router])

  return {
    hasFavorited,
    handleFavorite
  }
}

export default useFavorite