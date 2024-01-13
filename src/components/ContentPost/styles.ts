import styled from "styled-components";

export const ContentPost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    margin-top: 1rem;
    gap: 1rem;

    p {
        color: ${(props) => props.theme['base-text']};
        font-size: 1rem;
        font-family: 'Nunito', sans-serif;

    }

`