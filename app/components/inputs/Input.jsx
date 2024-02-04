'use client'

import { BiDollar } from "react-icons/bi"

export default function Input({ id, label, type, disabled, required, register, errors, formatPrice }) {
  return (
    <div className="relative w-full">
      {formatPrice && (
        <BiDollar className="absolute top-5 left-2 text-neutral-700" size={24} />
      )}
      <input id={id} disabled={disabled} placeholder=" " type={type} {...register(id, { required })}
        className={`peer w-full p-3 pt-5 font-light rounded-md bg-white border outline-none disabled:cursor-not-allowed disabled:opacity-70 transition'
          ${formatPrice ? 'pl-9' : 'pl-4'} ${errors[id] ? 'border-indigo-500' : 'border-neutral-300'} ${errors[id] ? 'focus:border-indigo-500' : 'focus:border-black'}`}
      />
      <label htmlFor={id} className={`absolute top-5 z-10 text-sm duration-150 transform -translate-y-3 origin-[0] cursor-tex'
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4
        ${formatPrice ? 'left-9' : 'left-4'} ${errors[id] ? 'text-indigo-500' : 'text-zinc-400'}
      `}>
        {label}
      </label>
    </div>
  )
}