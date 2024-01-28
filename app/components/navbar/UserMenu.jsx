'use client'

import Avatar from "../Avatar"
import MenuItem from "./MenuItem"

import { BiMenu } from "react-icons/bi"
import { useCallback, useState } from "react"

import useRegisterModal from "@/app/hooks/useRegisterModal"

export default function UserMenu() {
  const registerModal = useRegisterModal()
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  return (
    <div className="relative">
      <div className="gap-3 flex flex-row items-center">
        <div onClick={() => {}} className="hidden md:block font-medium text-sm py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          Evinizi Mishbnb'ye taşıyın
        </div>
        <div onClick={handleToggle} className="gap-3 flex flex-row items-center rounded-full p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 cursor-pointer hover:shadow-lg transition">
          <BiMenu size={18} />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute w-[40vw] md:w-3/4 rounded-xl text-sm shadow-md bg-white overflow-hidden right-0 top-12">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={registerModal.onOpen} label='Kaydolun' />
              <MenuItem onClick={() => {}} label='Oturum açın' />
            </>
          </div>
        </div>
      )}
    </div>
  )
}