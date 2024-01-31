'use client'

import Modal from "./Modal"

import useFilterModal from "@/app/hooks/useFilterModal"

export default function FilterModal() {
  const filterModal = useFilterModal()

  return (
    <Modal title='Filtreler' isOpen={filterModal.isOpen} onClose={filterModal.onClose} onSubmit={() => {}} />
  )
}