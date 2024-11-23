import React from 'react'
import { Button, Navbar, Link, NavbarItem, NavbarContent, NavbarBrand } from "@nextui-org/react"
import logo from "/logo.png";


function NavbarArea() {
  return (
    <>
      <Navbar
        shouldHideOnScroll
        isBlurred={true}
        className="bg-zinc-950 w-full"
        maxWidth="xl"
      >
        <NavbarBrand>
          <div className='w-26'>
            <img src="/logo.png" alt="" />
          </div>
        </NavbarBrand>
        <NavbarContent justify='end'>
          <NavbarItem>
            <Button as={Link} color='primary' variant='bordered' radius='full'>Contact</Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}

export default NavbarArea