import styled from "styled-components"
import Router, { useRouter } from "next/router"

import Logo from "../logo/Logo"
import Container from "../layout/container/Container"

const StyledNavBar = styled.div`
    height: 105px;
    display: flex;
    align-items: center;
` 
const StyledLogo = styled.div`
    cursor: pointer;
`

function Navbar() {
    const router = useRouter()
    return (
        <StyledNavBar>
            <Container>
                <StyledLogo onClick={() => router.push('/')}>
                    <Logo type={'horizontal'}/>
                </StyledLogo>
            </Container>
        </StyledNavBar>
    )
}

export default Navbar