import styled from "styled-components"

import BackgroundImageWithChildren from "../src/components/layout/backgroundImageWithChildren/BackgroundImageWithChildren"

const StyledDiv = styled.div`
	background-color: red;
`

export default function HomePage(){
	return (
		<BackgroundImageWithChildren image={'/background.png'}>
			<StyledDiv>
				Pagina Inicial 
			</StyledDiv>
		</BackgroundImageWithChildren>
    )
}