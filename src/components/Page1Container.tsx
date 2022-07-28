import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Link as LinkScroll } from 'react-scroll/modules'
import { Link as LinkRouter } from 'react-router-dom'

const Navbar2Container = styled.div`
  ${tw`
    `}
`

const Navbar2Style = styled.div`
  ${tw`
  flex
    `}
`

const NavBarList = styled.div`
  ${tw`
    flex
    flex-col
    absolute
    bg-gray-600
    m-6
    p-4
    mt-14
    rounded-b-md
    font-extrabold
    space-y-1
    text-gray-200
    `}
`
const Dot = styled.div`
  ${tw`
    mr-10
    `}
`


export const Page1Container = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Navbar2Container id='/'>
        <Navbar2Style>
          <Dot onClick={() => setClick(!click)}>•</Dot>

          <LinkRouter onClick={()=> setClick(false)} to='/'>Page 1</LinkRouter>



          {click &&
          <NavBarList>
            <LinkScroll activeClass='active' to='/1' spy={true} smooth={true} offset={0} duration={500}>Top</LinkScroll>

            <LinkScroll activeClass='active' to='pageonescroll' spy={true} smooth={true} offset={0} duration={500}>Page
              1.1</LinkScroll>
            <LinkScroll activeClass='active' to='pagetwoscroll' spy={true} smooth={true} offset={0} duration={500}>Page
              1.2</LinkScroll>
            <LinkScroll activeClass='active' to='pagethreescroll' spy={true} smooth={true} offset={0} duration={500}>Page
              1.3</LinkScroll>
            <LinkScroll activeClass='active' to='pagefourscroll' spy={true} smooth={true} offset={0} duration={500}>Page
              1.4</LinkScroll>
            <LinkScroll activeClass='active' to='pagefivescroll' spy={true} smooth={true} offset={0} duration={500}>Page
              1.5</LinkScroll>
          </NavBarList>
          }





        </Navbar2Style>
      </Navbar2Container>
    </>
  )
}

export default Page1Container
