import styled from "styled-components"

import Navbar from "../../../src/components/navbar/Navbar"

const Body = styled.div`
    background-color: #EFEFEF;
    min-height: 100vh;
`

function infoPage() {
    return (
        <>
            <Navbar />
            <Body>conteudo</Body>
        </>
    )
}

export default infoPage