import { SearchFormContainer, SearchFormInfo, SearchFormInput } from "./styles";
import { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";

export function SearchForm(){
    const {dataPost, fechPost} = useContext(PostContext)

    let timeout: number | undefined;
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        if(timeout) {
            window.clearTimeout(timeout);
          }
      
          timeout = setTimeout(() => {
            fechPost(event.target.value)
            timeout = undefined;
          }, 300);
    }
    

    return(
    <SearchFormContainer onSubmit={() => {return "oi"}} >
        <SearchFormInfo>
            <strong>Publicações</strong>
            <span>{dataPost.totalCount} pulicações</span>

        </SearchFormInfo>
        <SearchFormInput 
            type="text" 
            placeholder="Buscar conteúdo"
            onChange={handleChange} 
            />

    </SearchFormContainer>
    )
}