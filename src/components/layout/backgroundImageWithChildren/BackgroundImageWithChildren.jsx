import styled from "styled-components"

const StyledFlex = styled.div`
    display: flex;
`


const StyledImage = styled.div`
    background-image: url('/background.png');
    width: 100%; //necessário colocar tamanho da imagem para set
    min-height: 100vh; //necessário colocar tamanho da imagem para set
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;
`

function BackgroundImageWithChildren({children}) {
    return(
        <StyledFlex>
            {children}
            <StyledImage/>
        </StyledFlex>
    )
}

export default BackgroundImageWithChildren