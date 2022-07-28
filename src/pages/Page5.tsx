import React from "react";
import styled from "styled-components";
import tw from "twin.macro"

const Page5Container = styled.div`
    ${tw`
    bg-gray-500
    w-screen
    h-screen
    
    `}
`

const Page5Style = styled.div`
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

export default function Page5() {

    return(
       <>
        <Page5Container>
            <Page5Style>
                Page 5

            </Page5Style>
        </Page5Container>
       </>
    )
}
