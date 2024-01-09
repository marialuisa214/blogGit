import logo from '../../assets/logo.svg'
import effectsuflixLeft from '../../assets/effectsuflixLeft.svg'
import effectsuflixRigth from '../../assets/effectsuflixRigth.svg'
import { Effect, HeaderContainer, Logo } from './styles'

export function Header(){
    return(
        <HeaderContainer>
            <Effect src={effectsuflixLeft} alt="" />
            <Logo src={logo} alt="" />
            <Effect src={effectsuflixRigth} alt="" />
        </HeaderContainer>
    )
}