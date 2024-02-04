import { HiOutlineHeart, HiHeart } from "react-icons/hi"

export default function HeartButton({ listingId, currentUser }) {
  const hasFavorited = false

  const handleFavorite = () => {}

  return (
    <div className="relative hover:opacity-80 cursor-pointer transition" onClick={handleFavorite}>
      <HiOutlineHeart size={26} className="absolute -top-[2px] -right-[2px] text-neutral-50" />
      <HiHeart size={22} className={hasFavorited ? 'fill-indigo-500' : 'fill-neutral-400/70'} />
    </div>
  )
}