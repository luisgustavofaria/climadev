import styled from "styled-components"

import Input from "../input/Input"

const SuggestionsContainer = styled.div`
    margin-top: 10px;
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
`

const Suggestions = styled.div`
    padding: 10px;
    cursor: pointer;
    
    &:hover {
    background-color: #e4e4e4;
  }
`

function InputWithSuggestions({suggestions, ...props}){
    return(
        <>
            <Input {...props}/>
            <SuggestionsContainer>
                {
                    suggestions.map((suggestions, pos) => 
                        <Suggestions
                            key={`suggestion-${pos}`}
                            onClick={suggestions.onClick}
                        >
                            {suggestions.text}     
                        </Suggestions>
                    )
                }
                
                
            </SuggestionsContainer>
        </>
    )
}

InputWithSuggestions.defaultProps = {
    suggestions: [
        { text: 'Sugestão 1', onClick: () => {} },
        { text: 'Sugestão 2', onClick: () => {} },
        { text: 'Sugestão 3', onClick: () => {} },
        { text: 'Sugestão 4', onClick: () => {} },
        { text: 'Sugestão 5', onClick: () => {} },
    ]
}

export default InputWithSuggestions