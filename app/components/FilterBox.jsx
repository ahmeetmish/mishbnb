'use client'

import useFilterModal from "@/app/hooks/useFilterModal"

import { MdFilterList, MdFilterListOff } from "react-icons/md"

export default function FilterBox() {
  const filterModal = useFilterModal()

  return (
    <div onClick={filterModal.onOpen} className="gap-1 flex items-center p-3 border-[1px] rounded-xl shadow-sm cursor-pointer">
      <MdFilterList size={20} />
      <span>Filtreler</span>
    </div>
  )
}