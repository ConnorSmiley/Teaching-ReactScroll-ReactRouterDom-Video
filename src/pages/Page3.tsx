import React from "react";
import styled from "styled-components";
import tw from "twin.macro"

const Page3Container = styled.div`
    ${tw`
    h-screen
    w-screen
    bg-pink-500
    
    `}
`

const Page3Style = styled.div`
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

export default function Page3() {

    return(
       <>
        <Page3Container>
            <Page3Style>
                Page 3

            </Page3Style>
        </Page3Container>
       </>
    )
}
