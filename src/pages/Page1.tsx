import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import PageOne from '../components/PageOne'
import PageTwo from '../components/PageTwo'
import PageThree from '../components/PageThree'
import PageFour from '../components/PageFour'
import PageFive from '../components/PageFive'

const Page1Container = styled.div`
  ${tw`
    w-screen
    h-screen
    bg-green-500
    
    `}
`

const Page1Style = styled.div`
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

export const Page1= () => {

  return (
    <>
      <Page1Container >
        <Page1Style id="/1" >
          page 1
        </Page1Style>
        <PageOne />
        <PageTwo />
        <PageThree />
        <PageFour />
        <PageFive />
      </Page1Container>
    </>
  )
}

export default Page1
