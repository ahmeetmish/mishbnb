'use client'

export default function CategoryInput({ label, Icon, selected, onClick }) {
  return (
    <div className={`gap-3 flex flex-col p-4 rounded-xl border-2 hover:border-black transition cursor-pointer
      ${selected ? 'border-black' : 'border-neutral-200'}
    `} onClick={() => onClick(label)}>
      <Icon size={30} />
      <div className="font-medium">
        {label}
      </div>
    </div>
  )
}