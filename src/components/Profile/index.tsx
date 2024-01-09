import { ArrowSquareOut, Buildings, GithubLogo, Users } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { BoxProfile, ContainerProfile, Description, ExtraInformations, InfoBasicInformations } from "./styles";

 export function Profile() {
    const theme = useTheme();
    return (
        <ContainerProfile> 
            <BoxProfile>
                <section >
                    <img src="https://avatars.githubusercontent.com/u/91849929?s=400&u=ded66ccb8bc2857c99ebbdc069714acb0d80f19f&v=4" alt="" />
                </section>

                <div> 
                    <InfoBasicInformations> 
                        <h1>Nome</h1>
                        <button>
                            <span>GITHUB</span>
                            <ArrowSquareOut size={25} color={theme['blue']} />
                        </button>
                    </InfoBasicInformations>

                    <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti dolorum sequi enim provident quisquam cum tempora dolor reiciendis officia! Unde, labore! Veritatis perspiciatis, sapiente pariatur debitis quisquam voluptatem est necessitatibus?</Description>

                    <ExtraInformations>
                        <div>
                            <GithubLogo size={20} color={theme['blue']} weight="fill" />
                            <label>Repositórios</label>
                        </div>
                        <div>
                            <Buildings size={20} color={theme['blue']} weight="fill" />
                            <label>trabalho</label>
                        </div>
                        <div>
                            <Users size={20} color={theme['blue']} weight="fill" /> <label>Seguindo</label>
                        </div>
                    </ExtraInformations>
                </div>
            </BoxProfile>
        </ContainerProfile>
    )
 }