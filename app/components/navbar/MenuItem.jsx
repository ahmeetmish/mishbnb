'use client'

export default function MenuItem({ label, onClick }) {
  return (
    <div onClick={onClick} className="px-4 py-3 hover:font-medium hover:bg-neutral-100 transition">
      {label}
    </div>
  )
}