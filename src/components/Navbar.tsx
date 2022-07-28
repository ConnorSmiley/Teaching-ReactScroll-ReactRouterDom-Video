import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Link as LinkRouter } from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'





const NavbarContainer = styled.div`
  ${tw`
    h-20
    w-screen
    bg-black
    absolute
    flex
    items-center
    justify-center
    
    `}
`

const NavbarStyle = styled.div`
  ${tw`
  w-full
  z-10
  text-white
  font-bold
  flex
  flex-row
  justify-between
  text-2xl
  px-20
 
    
    `}
`

export default function Navbar() {

  return (
    <>
      <NavbarContainer>
        <NavbarStyle>
          <LinkRouter to='/'>Page1</LinkRouter>
          <LinkScroll to='/' activeClass='active' to='/pageone' spy={true} smooth={true} offset={100}>1.1</LinkScroll>
          <LinkRouter to='/page2'>Page2</LinkRouter>
          <LinkRouter to='/page3'>Page3</LinkRouter>
          <LinkRouter to='/page4'>Page4</LinkRouter>
          <LinkRouter to='/page5'>Page5</LinkRouter>
        </NavbarStyle>
      </NavbarContainer>
    </>
  )
}



