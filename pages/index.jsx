import styled from "styled-components"

import BackgroundImageWithChildren from "../src/components/layout/backgroundImageWithChildren/BackgroundImageWithChildren"
import Logo from "../src/components/logo/Logo"
import SearchCity from "../src/components/searchCity/SearchCity"

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

const StyledInput = styled(SearchCity)`
	width: 100%;
	box-sizing: border-box;
`

const InputContainer = styled.div`
	@media (min-width: 750px) {
		width: 150%;
	}
	
	z-index: 100;
`



export default function HomePage(){
	return (
		<BackgroundImageWithChildren>
			<StyledDiv>
				<Logo showImage={true} type={'vertical'}/>
				<InputContainer>
					<StyledInput/>
				</InputContainer>
			</StyledDiv>
		</BackgroundImageWithChildren>
    )
}