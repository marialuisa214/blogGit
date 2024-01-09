import { SearchFormContainer, SearchFormInfo, SearchFormInput } from "./styles";

export function SearchForm(){
    return(
    <SearchFormContainer>
        <SearchFormInfo>
            <strong>Publicações</strong>
            <span>7 publicações</span>

        </SearchFormInfo>
        <SearchFormInput type="text" placeholder="Buscar conteúdo"/>

    </SearchFormContainer>
    )
}