import styled from "styled-components"

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    
    max-width: 100%;
    max-height: 40vh;

    background: ${(props) => props.theme['base-backgroud']};
    background-image: linear-gradient(
        rgba(21, 98, 175, 0.76),
        rgba(21, 98, 175, 0.34),
        rgba(21, 98, 175, 0.14)
    );
`

export const Logo = styled.img`
    width: 10%;
    height: 10%;

    @media (max-width: 640px) {
        padding-bottom: 2vh;
    }

    @media (min-width: 641px) and (max-width: 1023px) {
        padding-bottom: 5vh;
    }

    @media (min-width: 1024px) {
        padding-bottom: 9vh;
    }
`

export const Effect = styled.img`
    width: 30%;
    height: 30%;
`
