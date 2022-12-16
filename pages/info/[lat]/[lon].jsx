import styled from "styled-components"

import Navbar from "../../../src/components/navbar/Navbar"
import Container from "../../../src/components/layout/container/Container"

const Body = styled.div`
    background-color: #EFEFEF;
    min-height: 100vh;
`

function infoPage() {
    return (
        <>
            <Navbar />
            <Body>
                <Container>
                    conteudo
                </Container>    
            </Body>
        </>
    )
}

export default infoPage