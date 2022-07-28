import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'


const HeroContainer = styled.div`
  ${tw`
    h-screen
    w-screen
    bg-blue-500
    `}
`

const HeroStyle = styled.div`
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

export interface IHeroProps {

}

const PageOne: React.FunctionComponent<IHeroProps> = () => {

  return (
    <>
      <HeroContainer>
        <HeroStyle>
          Page 1.1
        </HeroStyle>
      </HeroContainer>
    </>
  )
}

export default PageOne
