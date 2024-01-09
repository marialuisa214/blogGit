import { PostGallery } from "../../components/PostGallery";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SerchForm";
import { Container } from "./styles";

export function Feed(){
    return(
        <Container>
            <Profile />
            <SearchForm />
            <PostGallery />
        </Container>
    )
}