import styled from "styled-components"

const StyledInput = styled.input`
    background-color: #eeeeee;
    border: 0;
    outline: none;
    padding: 20px;
    color: #000000;
    font-weight: bold;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 100%;
`

function Input(props) {
    return (   
        <StyledInput {...props}/>
    )
}

export default Input