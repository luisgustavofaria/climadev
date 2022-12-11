import styled from "styled-components"


const ImgLogo = styled.div`
    background-image: url('/woman.svg');
    width: 100%;
    height: 40vh;
    background-repeat: no-repeat;
    
`

const VerticalText = styled.h1`
    font-size: 80px;
    margin-left: 150px;
    margin-top: -80px;
`

const PrimaryColor = styled.span`
    color: ${props => props.theme.colors.primary};
`

function Logo() {
    return(
        <div>
            <ImgLogo/>
            <VerticalText>
                Clima <br/><PrimaryColor>Dev</PrimaryColor>
            </VerticalText>
        </div>
    )
}

export default Logo