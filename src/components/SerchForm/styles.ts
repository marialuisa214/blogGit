import styled from "styled-components";

export const SearchFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 864px;
    max-width: 864px;

    gap: 1rem;
`

export const SearchFormInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    font-family: 'Nunito', sans-serif;
    strong {
        font-size: 1.5rem;
        color: ${(props) => props.theme['base-title']};
    }
    span {
        color: ${(props) => props.theme['base-span']};
    }
    
`

export const SearchFormInput = styled.input`
    background-color: ${(props) => props.theme['base-input']};
    border: solid 1px ${(props) => props.theme['base-border']};
    border-radius: 6px;
    padding: 0.8rem;
    color: ${(props) => props.theme['base-text']};


    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
    



    
`
