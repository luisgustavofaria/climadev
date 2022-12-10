import styled from "styled-components"

import BackgroundImageWithChildren from "../src/components/layout/backgroundImageWithChildren/BackgroundImageWithChildren"
import Logo from "../src/components/logo/Logo"

const StyledDiv = styled.div`
	background-color: white;
	min-width: 500px;
	display: flex;
	flex-direction: column;
	padding: 0 40px;
	justify-content: center;

	@media (max-width: 500px){
		min-width: 100%;
	}
`

export default function HomePage(){
	return (
		<BackgroundImageWithChildren>
			<StyledDiv>
				<Logo></Logo>
				<input type="text" />
			</StyledDiv>
		</BackgroundImageWithChildren>
    )
}