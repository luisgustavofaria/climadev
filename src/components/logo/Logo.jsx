import styled from "styled-components"


const ImgLogo = styled.div`
    background-image: url('/woman.svg');
    width: 100%;
    height: 250px;
    background-repeat: no-repeat;
    
`

const VerticalText = styled.h1`
    font-size: 80px;
    margin-left: 150px;
    margin-top: -100px;
`

const HorizontalText = styled.h1`
    font-size: 40px;
`

const PrimaryColor = styled.span`
    color: ${props => props.theme.colors.primary};
`

function Logo({showImage, type}) {
    return(
        <div>
            { showImage && <ImgLogo/>}
            { type === 'vertical' && <VerticalText>
                Clima <br/><PrimaryColor>DEV</PrimaryColor>
            </VerticalText>
            }
            { type === 'horizontal' && <HorizontalText>
                Clima <PrimaryColor>DEV</PrimaryColor>
            </HorizontalText>
            }
        </div>
    )
}

export default Logo