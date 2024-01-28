'use client'

export default function Button({
  label, onClick, outline, small, Icon, disabled
}) {
  return (
    <button onClick={onClick} disabled={disabled} className={`relative w-full rounded-lg hover:opacity-80 disabled:opacity-70 disabled:cursor-not-allowed transition
      ${outline ? 'bg-white' : 'bg-indigo-500'} ${outline ? 'border-black' : 'border-indigo-500'}
      ${outline ? 'text-black' : 'text-white'} ${small ? 'py-1' : 'py-3'} ${small ? 'text-sm' : 'text-md'}
      ${small ? 'font-light' : 'font-semibold'} ${small ? 'border-[1px]' : 'border'}
    `}>
      {Icon && (
        <Icon className="absolute top-3 left-4" size={24} />
      )}
      {label}
    </button>
  )
}