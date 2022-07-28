import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Link as LinkRouter } from 'react-router-dom'
import Page1Container from './Page1Container'

const NavbarContainer = styled.div`
  ${tw`
    h-20
    w-screen
    bg-black
    flex
    items-center
    justify-center
    fixed
    `}
`

const NavbarStyle = styled.div`
  max-width: 50em;
  ${tw`
  w-full
  z-10
  text-gray-200
  font-bold
  flex
  flex-row
  justify-between
  text-2xl
    `}
`

export default function Navbar({setClick}) {

  return (
    <>
      <NavbarContainer>
        <NavbarStyle>
          <LinkRouter to='/'><Page1Container /></LinkRouter>
          <LinkRouter onClick={()=>setClick(false)}  to='/page2'>Page2</LinkRouter>
          <LinkRouter onClick={()=>setClick(false)} to='/page3'>Page3</LinkRouter>
          <LinkRouter onClick={()=>setClick(false)} to='/page4'>Page4</LinkRouter>
          <LinkRouter  onClick={()=>setClick(false)} to='/page5'>Page5</LinkRouter>
        </NavbarStyle>
      </NavbarContainer>
    </>
  )
}



//onClick={()=>setClick(false)}
