'use client'

export default function ListingCategory({ label, description, Icon }) {
  return (
    <div className="gap-6 flex flex-col">
      <div className="gap-4 flex flex-row items-center">
        <Icon size={40} className='text-neutral-600' />
        <div className="flex flex-col">
          <div className="font-semibold text-lg">
            {label}
          </div>
          <div className="font-light text-neutral-500">
            {description}
          </div>
        </div>
      </div>
    </div>
  )
}