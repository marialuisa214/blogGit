import styled from "styled-components"

export const PostGalleryContainer = styled.div`
    max-width: 864px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

`

export const PostContent = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;

max-height: 300px;
max-width: 416px; // 864/2 - 2rem = 416px //1rem = 16px 

padding: 2rem;
border-radius: 10px;

background: ${(props) => props.theme['base-post']};
font-family: 'Nunito', sans-serif;

p {
    max-height: 130px;
    overflow: hidden;
    text-overflow: ellipsis;
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