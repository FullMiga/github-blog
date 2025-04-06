import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router";
import { Router } from "./Router";
import { BlogContextProvider } from "./contexts/BlogContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BlogContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </BlogContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}