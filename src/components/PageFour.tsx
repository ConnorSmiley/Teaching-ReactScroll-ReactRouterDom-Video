import React from "react";
import styled from "styled-components";
import tw from "twin.macro"

const PageFourContainer = styled.div`
    ${tw`
           h-screen
    w-screen
    bg-pink-500 
    `}
`

const PageFourStyle = styled.div`
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

export interface IPageFourProps {

}

const PageFour: React.FunctionComponent<IPageFourProps> = () => {

    return(
       <>
        <PageFourContainer>
            <PageFourStyle>
                Page 1.4

            </PageFourStyle>
        </PageFourContainer>
       </>
    )
}

export default PageFour
