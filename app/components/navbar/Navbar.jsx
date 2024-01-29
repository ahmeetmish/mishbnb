'use client'

import Container from "../Container"
import Logo from "./Logo"
import NavItems from "./NavItems"
import UserMenu from "./UserMenu"
import Search from "./Search"

export default function Navbar({ currentUser }) {
  console.log(currentUser)

  return (
    <div className="fixed w-full bg-white z-100 shadow-sm">
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
    </div>
  )
}