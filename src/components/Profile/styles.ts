import styled from "styled-components";

export const ContainerProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 864px;
    max-width: 864px;


`
export const BoxProfile = styled.div`
    width: 100%;
    max-width: 864px;
    padding: 2rem;
    display: grid;
    grid-template-columns:  180px auto;
    
    gap: 2rem;
    
    margin-top: -95px;
    
    background: ${(props) => props.theme['base-profile']};
    border: none;
    border-radius: 10px;

    img {
        width: 180px;
        height: 180px;
        border-radius: 10px;
    
    }
`

export const BoxInfoProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    
`


export const InfoBasicInformations = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-family: 'Nunito', sans-serif;
     
    h1 {
        color: ${(props) => props.theme['base-title']};
        font-size: 2rem;
        
    }

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
            margin-bottom: 5px;
        }
        
        &:hover {
            filter: brightness(0.8);
            transition: 0.2s;
        }

    }

`

export const Description = styled.p`
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    font-family: 'Nunito', sans-serif;
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
        font-size: 0.8rem;
        gap: 0.5rem;
    }

`