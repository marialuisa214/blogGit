import styled from "styled-components";

export const ContainerPost = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 864px;
    margin: 0 auto 0; 

    gap: 2rem;

    align-items: center;
    justify-content: center;

    margin: 0 auto 0; //top Right Bottom Left
    padding: 0 1.5rem; // espaçamento nas laterias do conteudo

`

export const BoxInfoPost = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem;
    
    margin-top: -95px;
    
    background: ${(props) => props.theme['base-profile']};
    border: none;
    border-radius: 10px;
    font-family: 'Nunito', sans-serif;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        background: transparent;
        border: none;

        color: ${(props) => props.theme['blue']};
        cursor: pointer;
        svg {
            line-height: 0;
        }
    }
`

export const ExtraInformations = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;

    margin-top: 1rem;
    gap: 2rem;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        color: ${(props) => props.theme['base-label']};
        font-family: 'Nunito', sans-serif;
        gap: 0.5rem;
    }

`
