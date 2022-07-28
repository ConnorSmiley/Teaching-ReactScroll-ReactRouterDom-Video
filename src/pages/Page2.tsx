import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Page2Container = styled.div`
  ${tw`
        h-screen
    w-screen
    bg-indigo-500
    
    `}
`

const Page2Style = styled.div`
  ${tw`
      h-full
    w-full
    flex
    items-center
    justify-center
    text-black
    uppercase
    text-9xl
    font-extrabold
    
    `}
`

export default function Page2() {

  return (
    <>
      <Page2Container>
        <Page2Style>
          Page 2
        </Page2Style>
      </Page2Container>
    </>
  )
}
