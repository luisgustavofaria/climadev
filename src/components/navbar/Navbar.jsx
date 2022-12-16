import styled from "styled-components"

import Logo from "../logo/Logo"
import Container from "../layout/container/Container"

const StyledNavBar = styled.div`
    height: 105px;
    display: flex;
    align-items: center;
` 

function Navbar() {
    return (
        <StyledNavBar>
            <Container>
                <Logo type={'horizontal'}/>
            </Container>
        </StyledNavBar>
    )
}

export default Navbar