import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        
    }
    &:focus {
            outline: 0;
            box-shadow: 0 0 0 2px ${(props) => props.theme['green-blue']};
    }

    body {
        background: ${(props) => props.theme['base-backgroud']};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased; // deixa as fontes mais nítidas

    }

    body, input, textarea, button {
        font: 400 1rem "Roboto", sans-serif; // fonte padrão
    }
  `