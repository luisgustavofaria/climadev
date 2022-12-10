import styled from "styled-components"

import BackgroundImageWithChildren from "../src/components/layout/backgroundImageWithChildren/BackgroundImageWithChildren"

const StyledDiv = styled.div`
	background-color: white;
	min-width: 500px;

	@media (max-width: 500px){
		min-width: 100%;
	}
`

export default function HomePage(){
	return (
		<BackgroundImageWithChildren>
			<StyledDiv>
				Pagina Inicial 
			</StyledDiv>
		</BackgroundImageWithChildren>
    )
}