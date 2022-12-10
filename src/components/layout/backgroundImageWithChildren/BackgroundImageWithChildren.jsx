import styled from "styled-components"

const StyledFlex = styled.div`
    display: flex;
`


const StyledImage = styled.div`
    background-image: url('${props => props.image}');
    width: 100%; //necessário colocar tamanho da imagem para set
    min-height: 100vh; //necessário colocar tamanho da imagem para set
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;
`

function BackgroundImageWithChildren({children, image}) {
    return(
        <StyledFlex>
            {children}
            <StyledImage image={image}/>
        </StyledFlex>
    )
}

export default BackgroundImageWithChildren