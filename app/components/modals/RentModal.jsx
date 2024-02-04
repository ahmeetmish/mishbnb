'use client'

import Modal from "./Modal"
import Heading from "../Heading"
import CategoryInput from "../inputs/CategoryInput"
import CountrySelect from "../inputs/CountrySelect"
import Counter from "../inputs/Counter"
import ImageUpload from "../inputs/ImageUpload"
import Input from "../inputs/Input"

import dynamic from "next/dynamic"
import toast from "react-hot-toast"
import { useForm } from "react-hook-form"
import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"

import useRentModal from "@/app/hooks/useRentModal"

import { categories } from "../navbar/Categories"

const STEPS = Object.freeze({
  CATEGORY: 0,
  LOCATION: 1,
  INFO: 2,
  IMAGES: 3,
  DESCRIPTION: 4,
  PRICE: 5
})

export default function RentModal() {
  const router = useRouter
  const rentModal = useRentModal()

  const [step, setStep] = useState(STEPS.CATEGORY)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: {
      errors
    },
    reset
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      category: '',
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: '',
      price: 1
    }
  })

  const category = watch('category')
  const location = watch('location')
  const guestCount = watch('guestCount')
  const roomCount = watch('roomCount')
  const bathroomCount = watch('bathroomCount')
  const imageSrc = watch('imageSrc')

  const setCustomValue = (id, value) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    })
  }

  const onBack = () => {
    setStep((value) => value - 1)
  }

  const onNext = () => {
    setStep((value) => value + 1)
  }

  const onSubmit = (data) => {
    if(step !== STEPS.PRICE) {
      return onNext()
    }

    setIsLoading(true)

    fetch('/api/listings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(() => {
      toast.success('İlan oluşturuldu!')
      router.refresh()
      reset()
      setStep(STEPS.CATEGORY)
      rentModal.onClose()
    }).catch(() => {
      toast.error('Bir şeyler ters gitti!')
    }).finally(() => {
      setIsLoading(false)
    })
  }

  const actionLabel = useMemo(() => {
    if(step === STEPS.PRICE) {
      return 'Oluştur'
    }

    return 'Devam et'
  }, [step])

  const secondaryActionLabel = useMemo(() => {
    if(step === STEPS.CATEGORY) {
      return undefined
    }

    return 'Geri dön'
  }, [step])

  const Map = useMemo(() => dynamic(() => import('../Map'), {
    ssr: false
  }), [location])

  let bodyContent = (
    <div className="gap-8 flex flex-col">
      <Heading title='Aşağıdakilerden hangisi yerinizi en iyi tanımlıyor?' />
      <div className="gap-3 grid grid-cols-1 md:grid-cols-2 max-h-[50vh] overflow-y-auto">
        {categories.map((item) => (
          <div className="col-span-1" key={item.label}>
            <CategoryInput label={item.label} Icon={item.icon} selected={category === item.label} onClick={(category) => setCustomValue('category', category)} />
          </div>
        ))}
      </div>
    </div>
  )

  if(step === STEPS.LOCATION) {
    bodyContent = (
      <div className="gap-8 flex flex-col">
        <Heading title='Yeriniz nerede bulunuyor?' subtitle='Adresiniz misafirlerle yalnızca rezervasyon yaptıklarında paylaşılır.' />
        <CountrySelect onChange={(value) => setCustomValue('location', value)} value={location} />
        <Map center={location?.latlng} />
      </div>
    )
  }

  if(step === STEPS.INFO) {
    bodyContent = (
      <div className="gap-4 flex flex-col">
        <Heading title='Yerinizle ilgili bazı temel bilgileri paylaşın' subtitle='Daha sonra, yatak türü gibi diğer ayrıntıları ekleyebilirsiniz.' />
        <Counter title='Misafir' onChange={(value) => setCustomValue('guestCount', value)} value={guestCount} />
        <hr />
        <Counter title='Yatak odası' onChange={(value) => setCustomValue('roomCount', value)} value={roomCount} />
        <hr />
        <Counter title='Banyo' onChange={(value) => setCustomValue('bathroomCount', value)} value={bathroomCount} />
      </div>
    )
  }

  if(step === STEPS.IMAGES) {
    bodyContent = (
      <div className="gap-8 flex flex-col">
        <Heading title='Yerinizin bazı fotoğraflarını ekleyin' />
        <ImageUpload onChange={(value) => setCustomValue('imageSrc', value)}  value={imageSrc} />
      </div>
    )
  }

  if(step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className="gap-8 flex flex-col">
        <Heading title='YŞimdi bu ev için bir başlık ve açıklama belirleyelim' subtitle='En iyi sonucu kısa başlıklar verir. Endişelenmeyin, daha sonra istediğiniz zaman değiştirebilirsiniz.' />
        <Input id='title' label='Başlık' required disabled={isLoading} register={register} errors={errors} />
        <hr />
        <Input id='description' label='Açıklama' required disabled={isLoading} register={register} errors={errors} />
      </div>
    )
  }

  if(step === STEPS.PRICE) {
    bodyContent = (
      <div className="gap-8 flex flex-col">
        <Heading title='Şimdi fiyatınızı belirleyin' subtitle='Bunu dilediğiniz zaman değiştirebilirsiniz.' />
        <Input id='price' label='Fiyat' formatPrice type='number' required disabled={isLoading} register={register} errors={errors} />
      </div>
    )
  }

  return (
    <Modal title='Evinizi Mishbnb&apos;ye taşıyın.' isOpen={rentModal.isOpen} onClose={rentModal.onClose} onSubmit={handleSubmit(onSubmit)} actionLabel={actionLabel} secondaryActionLabel={secondaryActionLabel}
     secondaryAction={step === STEPS.CATEGORY ? undefined : onBack} body={bodyContent} />
  )
}