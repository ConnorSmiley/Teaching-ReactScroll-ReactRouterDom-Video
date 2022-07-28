import React from "react";
import styled from "styled-components";
import tw from "twin.macro"

const PageThreeContainer = styled.div`
    ${tw`
        w-screen
    h-screen
    bg-purple-500
    
    `}
`

const PageThreeStyle = styled.div`
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

export interface IPageThreeProps {

}

const PageThree: React.FunctionComponent<IPageThreeProps> = () => {

    return(
       <>
        <PageThreeContainer id='pagethreescroll'>
            <PageThreeStyle>
                Page 1.3
            </PageThreeStyle>
        </PageThreeContainer>
       </>
    )
}

export default PageThree
