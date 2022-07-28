import React from "react";
import styled from "styled-components";
import tw from "twin.macro"

const PageTwoContainer = styled.div`
    ${tw`
       h-screen
    w-screen
    bg-red-500 
    `}
`

const PageTwoStyle = styled.div`
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

export interface IPageTwoProps {

}

const PageTwo: React.FunctionComponent<IPageTwoProps> = () => {

    return(
       <>
        <PageTwoContainer id='pagetwoscroll'>
            <PageTwoStyle>
           Page 1.2
            </PageTwoStyle>
        </PageTwoContainer>
       </>
    )
}

export default PageTwo
