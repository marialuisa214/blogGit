import { ArrowSquareOut, Calendar, CaretLeft, ChatCircle, GithubLogo } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { BoxInfoPost, ButtonContainer, ContainerPost, ContentPost, ExtraInformations } from "./styles";

export function Post(){
    const theme = useTheme();
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

            <h1>JavaScript data types and data structures</h1>

            <ExtraInformations>
                <div>
                    <GithubLogo size={20} color={theme['blue']} weight="fill" />
                    <label>Repositórios</label>
                </div>

                <div>
                    <Calendar size={20} color={theme['blue']} weight="fill" />
                    <label>tempo</label>
                </div>
                <div>
                    <ChatCircle size={20} color={theme['blue']} weight="fill" />
                    <label>comentarios</label>
                </div>
            </ExtraInformations>
            </BoxInfoPost>

            <ContentPost>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium modi itaque temporibus! Cumque amet, saepe perspiciatis placeat a nihil quo nostrum ab mollitia dolorum molestiae, veniam ex quod, totam blanditiis?</p>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium modi itaque temporibus! Cumque amet, saepe perspiciatis placeat a nihil quo nostrum ab mollitia dolorum molestiae, veniam ex quod, totam blanditiis?</p>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium modi itaque temporibus! Cumque amet, saepe perspiciatis placeat a nihil quo nostrum ab mollitia dolorum molestiae, veniam ex quod, totam blanditiis?</p>
            </ContentPost>
        </ContainerPost>
        
    )
}