'use client'

export default function Heading({ title, center }) {
  return (
    <div className={center ? 'text-center': 'text-start'}>
      <div className="font-medium text-2xl">
        {title}
      </div>
    </div>
  )
}