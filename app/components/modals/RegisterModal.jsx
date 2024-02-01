'use client'

import Modal from "./Modal"
import Heading from "../Heading"
import Input from "../inputs/Input"
import Button from "../Button"

import { useCallback, useState } from "react"
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc"
import { toast } from "react-hot-toast"
import { signIn } from "next-auth/react"

import useLoginModal from "@/app/hooks/useLoginModal"
import useRegisterModal from "@/app/hooks/useRegisterModal"

export default function RegisterModal() {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const onSubmit = (data) => {
    setIsLoading(true)

    fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }).then(() => {
      registerModal.onClose()
      toast.success('Basarili!')
    }).catch((error) => {
      toast.error('Bir seyler ters gitti!')
    }).finally(() => {
      setIsLoading(false)
    })
  }

  const handleModalSwitch = useCallback(() => {
    registerModal.onClose()
    loginModal.onOpen()
  }, [loginModal, registerModal])

  const bodyContent = (
    <div className="gap-4 flex flex-col">
      <Heading title='Mishbnb&apos;ye Hoş Geldiniz' />
      <Input id='name' label='Ad' disabled={isLoading} register={register} required errors={errors} />
      <Input id='email' label='E-posta' disabled={isLoading} register={register} required errors={errors} />
      <Input id='password' label='Parola' disabled={isLoading} register={register} required errors={errors} />
    </div>
  )

  const footerContent = (
    <div className="gap-4 flex flex-col mt-3">
      <hr />
      <Button onClick={() => signIn('google')} outline label='Google ile devam et' Icon={FcGoogle} />
      <div className="font-light text-center mt-4 text-neutral-500">
        <div className="gap-2 flex flex-row items-center justify-center text-center">
          <div>Zaten bir hesabın var mı?</div>
          <div onClick={handleModalSwitch} className="font-medium text-neutral-800 hover:underline cursor-pointer">Giriş Yap</div>
        </div>
      </div>
    </div>
  )

  return (
    <Modal title='Kayıt ol' actionLabel='Devam et' onSubmit={handleSubmit(onSubmit)}
    disabled={isLoading} onClose={registerModal.onClose} isOpen={registerModal.isOpen} body={bodyContent} footer={footerContent} />
  )
}