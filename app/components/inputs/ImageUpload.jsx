'use client'

import Image from "next/image"
import { useCallback } from "react"
import { CldUploadWidget } from "next-cloudinary"
import { MdOutlineAddPhotoAlternate } from "react-icons/md"

export default function ImageUpload({ onChange, value }) {
  const handleUpload = useCallback((result) => {
    onChange(result.info.secure_url)
  }, [onChange])

  return (
    <CldUploadWidget onUpload={handleUpload} uploadPreset="bsr1jqvg" options={{
      maxFiles: 1
    }}>
      {({ open }) => {
        return (
          <div onClick={() => open?.()} className="relative gap-4 flex flex-col items-center p-20 text-neutral-600 border-2 border-dashed border-neutral-300 hover:opacity-70 cursor-pointer transition">
            <MdOutlineAddPhotoAlternate size={48} />
            <div className="font-semibold text-lg">
              Fotoğrafınızı buraya yükleyin.
            </div>
            {value && (
              <div className="absolute w-full h-full inset-0">
                <Image fill alt="Upload" src={value} style={{ objectFit: 'cover' }} />
              </div>
            )}
          </div>
        )
      }}
    </CldUploadWidget>
  )
}