import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        
    }
    &:focus {
            outline: 0;
            box-shadow: none;
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