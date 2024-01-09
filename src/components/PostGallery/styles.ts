import styled from "styled-components"

export const PostGalleryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
   
    gap: 2rem;


`

export const PostContext = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;

padding: 2rem;
border-radius: 10px;

background: ${(props) => props.theme['base-post']};
font-family: 'Nunito', sans-serif;

p {
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
    text-align: justify;

}


`
export const PostInfoBasic = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    strong {
        color: ${(props) => props.theme['base-title']};
        font-size: 1.5rem;
    }
    
`