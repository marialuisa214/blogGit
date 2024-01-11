import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes/Router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { PostProvider } from "./contexts/PostContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>

      <GlobalStyle/>
      <PostProvider>
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
      </PostProvider>
    </ThemeProvider>
  )
 
}
