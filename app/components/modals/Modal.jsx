'use client'

import Button from "../Button"

import { IoMdClose } from "react-icons/io"
import { useCallback, useEffect, useState } from "react"

export default function Modal({title, body, footer, isOpen, onClose, onSubmit, disabled, actionLabel, secondaryAction, secondaryActionLabel}) {

  const [showModal, setShowModal] = useState(isOpen)

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  const handleClose = useCallback(() => {
    if(disabled) {
      return
    }

    setShowModal(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }, [disabled, onClose])

  const handleSubmit = useCallback(() => {
    if(disabled) {
      return
    }

    onSubmit()
  }, [disabled, onSubmit])

  const handleSecondaryAction = useCallback(() => {
    if(disabled || !secondaryAction) {
      return
    }

    secondaryAction()
  }, [disabled, secondaryAction])

  if(!isOpen) {
    return null
  }

  return (
    <>
      <div className="fixed z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-neutral-800/70 inset-0 outline-none focus:outline-none">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto lg:h-auto md:h-auto">
          <div className={`translate duration-300 h-full ${showModal ? 'translate-y-0' : 'translate-y-full'} ${showModal ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative flex flex-col w-full h-max lg:h-auto translate md:h-auto border-0 rounded-lg shadow-lg bg-white outline-none focus:outline-none">
              <div className="relative flex items-center justify-center p-6 rounded-t border-b-[1px]">
                <button onClick={handleClose} className="absolute left-5 p-1 border-0 hover:opacity-70 transition">
                  <IoMdClose size={18} />
                </button>
                <div className="font-semibold text-lg">
                  {title}
                </div>
              </div>
              <div className="relative flex-auto p-6">
                {body}
              </div>
              <div className="gap-2 flex flex-col p-6">
                <div className="gap-4 flex flex-row items-center w-full">
                  {secondaryAction && secondaryActionLabel && (
                    <Button onClick={handleSecondaryAction} disabled={disabled} label={secondaryActionLabel} outline />
                  )}
                  <Button onClick={handleSubmit} disabled={disabled} label={actionLabel} />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}