'use client'

import Container from "../Container"
import Logo from "./Logo"
import NavItems from "./NavItems"
import UserMenu from "./UserMenu"
import Search from "./Search"
import Categories from "./Categories"
import FilterBox from "../FilterBox"

export default function Navbar({ currentUser }) {
  return (
    <div className="fixed w-full bg-white z-50 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="gap-3 flex flex-row items-center justify-between md:gap-0">
            <Logo />
            <NavItems />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
        <Search />
      </div>
      <Container>
        <div className="gap-2 flex items-center justify-center">
          <Categories />
          <FilterBox />
        </div>
      </Container>
    </div>
  )
}