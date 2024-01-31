'use client'

import { ScrollingCarousel } from '@trendyol-js/react-carousel'
import { usePathname, useSearchParams } from "next/navigation"

import CategoryBox from "../CategoryBox"

import { FaSwimmingPool, FaMountain, FaSkiing, FaRegSnowflake } from "react-icons/fa"
import { MdBungalow, MdOutlineTempleBuddhist, MdOutlineCastle } from "react-icons/md"
import { HiOutlineHomeModern } from "react-icons/hi2"
import { TbBeach, TbSailboat, TbCamper } from "react-icons/tb"
import { GiCaveEntrance, GiTreeDoor, GiIsland } from "react-icons/gi"
import { LuPalmtree } from "react-icons/lu"
import { PiCactus, PiPark } from "react-icons/pi"
import { GoContainer } from "react-icons/go"

export const categories = [
  {
    label: 'Muhteşem havuzlar',
    icon: FaSwimmingPool
  },
  {
    label: 'Dünyanın zirvesi',
    icon: FaMountain
  },
  {
    label: 'Üçgen evler',
    icon: MdBungalow
  },
  {
    label: 'Küçük evler',
    icon: HiOutlineHomeModern
  },
  {
    label: 'Sahil',
    icon: TbBeach
  },
  {
    label: 'Mağaralar',
    icon: GiCaveEntrance
  },
  {
    label: 'Ağaç evler',
    icon: GiTreeDoor
  },
  {
    label: 'Adalar',
    icon: GiIsland
  },
  {
    label: 'Kayak',
    icon: FaSkiing
  },
  {
    label: 'Tropik',
    icon: LuPalmtree
  },
  {
    label: 'Çöl',
    icon: PiCactus
  },
  {
    label: 'Kuzey kutbu',
    icon: FaRegSnowflake
  },
  {
    label: 'Tekneler',
    icon: TbSailboat
  },
  {
    label: 'Kamp araçları',
    icon: TbCamper
  },
  {
    label: 'Minsular',
    icon: MdOutlineTempleBuddhist
  },
  {
    label: 'Milli parklar',
    icon: PiPark
  },
  {
    label: 'Tarihi evler',
    icon: MdOutlineCastle
  },
  {
    label: 'Konteynerler',
    icon: GoContainer
  },
]

export default function Categories() {
  const pathname = usePathname()
  const params = useSearchParams()
  const category = params?.get('category')

  const isMainPage = pathname == '/'

  if(!isMainPage) {
    return null
  }

  return (
    <ScrollingCarousel className='flex flex-row items-center justify-center pt-4 overflow-x-auto'>
      {categories.map((item) => (
        <CategoryBox key={item.label} label={item.label} Icon={item.icon} selected={category == item.label} />
      ))}
    </ScrollingCarousel>
  )
}