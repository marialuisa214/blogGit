import { ArrowSquareOut, Buildings, GithubLogo, Users } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { BoxInfoProfile, BoxProfile, ContainerProfile, Description, ExtraInformations, InfoBasicInformations } from "./styles";
import { useEffect, useState } from "react";

interface ProfileInfo {
    name: string;
    avatar_url: string;
    bio: string;
    followers: number;
    company: string;
    html_url: string;
    public_repos: number;

}

 export function Profile() {
    const theme = useTheme();

    const [ profile, setProfile] = useState<ProfileInfo>()

    async function loadProfile() {

        const response = await fetch('https://api.github.com/users/marialuisa214')

        const data = await response.json()
        const user: ProfileInfo = {
            name: data.name,
            avatar_url: data.avatar_url,
            bio: data.bio,
            followers: data.followers,
            company: data.company,
            html_url: data.html_url,
             public_repos: data.public_repos

        }

        setProfile(user)
    }

    useEffect(() => {
        loadProfile()
    }, [])

    function handleOpenUSerGit() {
        window.open(profile?.html_url)
    }
    

    return (
        <ContainerProfile> 
            <BoxProfile>
                <section >
                    <img src={profile?.avatar_url} alt="" />
                </section>

                <BoxInfoProfile> 
                    <InfoBasicInformations> 
                        <h1>{profile?.name}</h1>
                        <button onClick={() => handleOpenUSerGit()}>
                            <span>GITHUB</span>
                            <ArrowSquareOut size={20} color={theme['blue']} />
                        </button>
                    </InfoBasicInformations>

                    <Description>{profile?.bio}</Description>

                    <ExtraInformations>
                        <div>
                            <GithubLogo size={17} color={theme['blue']} weight="fill" />
                            <label>{profile?.public_repos} Repositórios</label>
                        </div>
                        <div>
                            <Buildings size={17} color={theme['blue']} weight="fill" />
                            <label>{profile?.company}</label>
                        </div>
                        <div>
                            <Users size={17} color={theme['blue']} weight="fill" /> <label>{profile?.followers} Seguidores</label>
                        </div>
                    </ExtraInformations>
                </BoxInfoProfile>
            </BoxProfile>
        </ContainerProfile>
    )
 }