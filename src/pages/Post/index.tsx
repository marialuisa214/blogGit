import { ArrowSquareOut, Calendar, CaretLeft, ChatCircle, GithubLogo } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { BoxInfoPost, ButtonContainer, ContainerPost, ContentPost, ExtraInformations } from "./styles";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
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

    const post = dataPost.allPosts.filter((post: PostInfo) => {
        return post.id === Number(id)

    })
    console.log(post)

    return(
        <ContainerPost>
            <BoxInfoPost>

            <ButtonContainer>
                <button>
                    <CaretLeft size={16} color={theme['blue']} />
                    VOLTAR
                </button>

                <button>
                    <span>VER NO GITHUB</span>
                    <ArrowSquareOut size={17} color={theme['blue']} />
                </button>
            </ButtonContainer>

            <h1>{post[0].title}</h1>

            <ExtraInformations>
                <div>
                    <GithubLogo size={20} color={theme['blue']} weight="fill" />
                    <label>Repositórios</label>
                </div>

                <div>
                    <Calendar size={20} color={theme['blue']} weight="fill" />
                    <label>{post[0].created_at}</label>
                </div>
                <div>
                    <ChatCircle size={20} color={theme['blue']} weight="fill" />
                    <label>{post[0].comments} comentarios</label>
                </div>
            </ExtraInformations>
            </BoxInfoPost>

            <ContentPost>
                <p>{post[0].body}</p>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium modi itaque temporibus! Cumque amet, saepe perspiciatis placeat a nihil quo nostrum ab mollitia dolorum molestiae, veniam ex quod, totam blanditiis?</p>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium modi itaque temporibus! Cumque amet, saepe perspiciatis placeat a nihil quo nostrum ab mollitia dolorum molestiae, veniam ex quod, totam blanditiis?</p>
            </ContentPost>
        </ContainerPost>
        
    )
}