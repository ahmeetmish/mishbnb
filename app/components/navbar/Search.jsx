'use client'

import { BiSearch } from "react-icons/bi"

export default function Search() {

  return (
    <div className="w-max mx-auto mt-1 py-3 border-[1px] rounded-full shadow-sm cursor-pointer">
      <div className="flex flex-row items-center">
        <div className="flex flex-col text-sm px-6">
          <span className="text-xs font-medium">Yer</span>
          <input className="outline-none placeholder:text-gray-600" placeholder="Gidilecek yerleri arayın" type="text" />
        </div>
        <div className="hidden md:block text-sm px-6 border-x-[1px]">
        <span className="text-xs font-medium">Giriş</span>
        <p className="text-gray-600">Tarih ekleyin</p>
        </div>
        <div className="hidden md:block text-sm px-6 border-x-[1px]">
        <span className="text-xs font-medium">Çıkış</span>
        <p className="text-gray-600">Tarih ekleyin</p>
        </div>
        <div className="hidden md:block text-sm px-6 border-x-[1px]">
        <span className="text-xs font-medium">Kişiler</span>
        <p className="text-gray-600">Misafir ekleyin</p>
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="p-3 bg-indigo-500 rounded-full text-white">
            <BiSearch size={20} />
          </div>
        </div>
      </div>
    </div>
  )
}