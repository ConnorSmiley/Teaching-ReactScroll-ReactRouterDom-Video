import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Link as LinkScroll } from 'react-scroll/modules'

const Navbar2Container = styled.div`
  ${tw`
    
    `}
`

const Navbar2Style = styled.div`
  ${tw`
    
    `}
`

export interface INavbar2Props {

}

const Page1Container: React.FunctionComponent<INavbar2Props> = () => {

  return (
    <>
      <Navbar2Container>
        <Navbar2Style>
          <LinkScroll to='/' activeClass='active' to='/pageone' spy={true} smooth={true} offset={100}
                      duration={500}>1.1</LinkScroll>
          <LinkScroll to='/pagethree'>Page1.2</LinkScroll>
          <LinkScroll to='/pagethree'>Page1.3</LinkScroll>
          <LinkScroll to='/pagefour'>Page1.4</LinkScroll>
          <LinkScroll to='/pagefive'>Page1.5</LinkScroll>
        </Navbar2Style>
      </Navbar2Container>
    </>
  )
}

export default Page1Container
