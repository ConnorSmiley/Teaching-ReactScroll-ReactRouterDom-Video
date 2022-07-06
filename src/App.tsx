import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const HomeContainer = styled.div`
  ${tw`
    bg-gray-500
    w-screen
    h-screen
    
    `}
`

const HomeStyles = styled.div`
  ${tw`
  flex
  flex-col
  items-center
  
    
    `}
`

export default function App() {
  return (
    <>
      <HomeContainer>
        <HomeStyles>

        </HomeStyles>
      </HomeContainer>
    </>
  )
}
