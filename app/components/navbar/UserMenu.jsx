'use client'

import Avatar from "../Avatar"
import MenuItem from "./MenuItem"

import toast from "react-hot-toast"
import { BiMenu } from "react-icons/bi"
import { signOut } from "next-auth/react"
import { useCallback, useState } from "react"

import useRentModal from "@/app/hooks/useRentModal"
import useLoginModal from "@/app/hooks/useLoginModal"
import useRegisterModal from "@/app/hooks/useRegisterModal"

export default function UserMenu({ currentUser }) {
  const rentModal = useRentModal()
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  const onRent = useCallback(() => {
    if(!currentUser) {
      return loginModal.onOpen()
    }

    rentModal.onOpen()
  }, [loginModal, currentUser, rentModal])

  return (
    <div className="flex relative z-30">
      <div className="gap-3 flex flex-row items-center">
        <div onClick={onRent} className="hidden md:block font-medium text-sm py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          Evinizi Mishbnb&apos;ye taşıyın
        </div>
        <div onClick={handleToggle} className="gap-3 flex flex-row items-center rounded-full p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 cursor-pointer hover:shadow-lg transition">
          <BiMenu size={18} />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute w-[40vw] md:w-3/4 rounded-xl text-sm shadow-md bg-white overflow-hidden right-0 top-12">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label='Seyahetler' />
                <MenuItem onClick={() => {}} label='Favoriler' />
                <MenuItem onClick={() => {}} label='Mülkler' />
                <MenuItem onClick={() => {}} label='Rezervasyonlar' />
                <hr />
                <MenuItem onClick={rentModal.onOpen} label="Evinizi Mishbnb'ye taşıyınız" />
                <hr />
                <MenuItem onClick={() => signOut().then(() => {toast.success('Çıkış yapıldı!')})} label='Oturumu kapatın' />
              </>
            ) : (
              <>
                <MenuItem onClick={registerModal.onOpen} label='Kaydolun' />
                <MenuItem onClick={loginModal.onOpen} label='Oturum açın' />
              </>
            )}
            
          </div>
        </div>
      )}
    </div>
  )
}