import React from "react";
import styled from "styled-components";
import tw from "twin.macro"

const PageFiveContainer = styled.div`
    ${tw`
    h-screen
    w-screen
    bg-gray-500 
    `}
`

const PageFiveStyle = styled.div`
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

export interface IPageFiveProps {

}

const PageFive: React.FunctionComponent<IPageFiveProps> = () => {

    return(
       <>
        <PageFiveContainer id='pagefivescroll'>
            <PageFiveStyle>
              Page 1.5
            </PageFiveStyle>
        </PageFiveContainer>
       </>
    )
}

export default PageFive
