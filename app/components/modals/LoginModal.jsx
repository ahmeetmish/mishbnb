'use client'

import Modal from "./Modal"
import Heading from "../Heading"
import Input from "../inputs/Input"
import Button from "../Button"

import { useState } from "react"
import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc"
import { toast } from "react-hot-toast"

import useLoginModal from "@/app/hooks/useLoginModal"
import useRegisterModal from "@/app/hooks/useRegisterModal"

export default function LoginModal() {
  const router = useRouter()
  const loginModal = useLoginModal()
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = (data) => {
    setIsLoading(true)

    signIn('credentials', {
      ...data,
      redirect: false
    }).then((cb) => {
      setIsLoading(false)

      if(cb?.ok) {
        toast.success('Giriş yapıldı!')
        router.refresh()
        loginModal.onClose()
      }

      if(cb?.error) {
        toast.error(cb.error)
      }
    })
  }

  const bodyContent = (
    <div className="gap-4 flex flex-col">
      <Heading title='Tekrar Hoş Geldiniz' />
      <Input id='email' label='E-posta' disabled={isLoading} register={register} required errors={errors} />
      <Input id='password' label='Parola' disabled={isLoading} register={register} required errors={errors} />
    </div>
  )

  const footerContent = (
    <div className="gap-4 flex flex-col mt-3">
      <hr />
      <Button onClick={() => {}} outline label='Google ile devam et' Icon={FcGoogle} />
      <div className="font-light text-center mt-4 text-neutral-500">
        <div className="gap-2 flex flex-row items-center justify-center text-center">
          <div>Zaten bir hesabın var mı?</div>
          <div onClick={loginModal.onClose} className="font-medium text-neutral-800 hover:underline cursor-pointer">Giriş Yap</div>
        </div>
      </div>
    </div>
  )

  return (
    <Modal title='Giriş yap' actionLabel='Devam et' onSubmit={handleSubmit(onSubmit)}
    disabled={isLoading} onClose={loginModal.onClose} isOpen={loginModal.isOpen} body={bodyContent} footer={footerContent} />
  )
}