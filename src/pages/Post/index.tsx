import { ArrowSquareOut, Calendar, CaretLeft, ChatCircle, GithubLogo } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { BoxInfoPost, ButtonContainer, ContainerPost, ExtraInformations } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import { ContentPostInfo } from "../../components/ContentPost";
// import { useParams } from "react-router-dom";
// import { useContext } from "react";
// import { PostContext } from "../../contexts/PostContext";

type PostInfo = {
    id: number,
    title: string,
    body: string,
    created_at: string,
    comments: number,
    html_url: string
}

export function Post() {
    const theme = useTheme();
    const {dataPost} = useContext(PostContext)

    const {id} = useParams()
    

    console.log({id, dataPost})
    const post = dataPost.allPosts.filter((post: PostInfo) => {
        return post.id === Number(id)

    })
    const markdown = post[0]?.body;

    function handleOpenUPostGit() {
        window.open(post[0]?.html_url)
    }
    const navigate = useNavigate();

    return(
        <ContainerPost>
            <BoxInfoPost>

            <ButtonContainer>
                <button onClick={() => navigate(-1)}>
                    <CaretLeft size={16} color={theme['blue']} />
                    VOLTAR
                </button>

                <button onClick={() => handleOpenUPostGit()}>
                    <span>VER NO GITHUB</span>
                    <ArrowSquareOut size={17} color={theme['blue']} />
                </button>
            </ButtonContainer>

            <h1>{post[0]?.title}</h1>

            <ExtraInformations>
                <div>
                    <GithubLogo size={20} color={theme['blue']} weight="fill" />
                    <label>Repositórios</label>
                </div>

                <div>
                    <Calendar size={20} color={theme['blue']} weight="fill" />
                    <label>{post[0]?.created_at}</label>
                </div>
                <div>
                    <ChatCircle size={20} color={theme['blue']} weight="fill" />
                    <label>{post[0]?.comments} comentarios</label>
                </div>
            </ExtraInformations>
            </BoxInfoPost>

            <ContentPostInfo body={markdown}></ContentPostInfo>
            
        </ContainerPost>
        
    )
}