import React from "react";
import styled from "styled-components";
import tw from "twin.macro"

const Page4Container = styled.div`
    ${tw`
    h-screen
    w-screen
    bg-purple-500
    
    `}
`

const Page4Style = styled.div`
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

export default function Page4() {

    return(
       <>
        <Page4Container>
            <Page4Style>
                Page 4

            </Page4Style>
        </Page4Container>
       </>
    )
}
