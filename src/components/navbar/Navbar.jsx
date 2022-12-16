import styled from "styled-components"

import Logo from "../logo/Logo"

const StyledNavBar = styled.div`
    
` 

function Navbar() {
    return (
        <StyledNavBar>
            <Logo type={'horizontal'}/>
        </StyledNavBar>
    )
}

export default Navbar