'use client'

import Heading from "./Heading"
import Button from "./Button"

import { useRouter } from "next/navigation"

export default function EmptyState({
  showReset,
  title = 'Eşleşme yok',
  subtitle = 'Filtrenizi kaldırmayı veya değiştirmeyi deneyin!'
}) {
  const router = useRouter()

  return (
    <div className="gap-2 flex flex-col items-center justify-center h-[60vh]">
      <Heading title={title} subtitle={subtitle} center />
      <div className="mt-4 w-48">
        {showReset && (
          <Button outline label='Filtreleri kaldır' onClick={() => router.push('/')} />
        )}
      </div>
    </div>
  )
}