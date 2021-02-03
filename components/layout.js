import React, { useState, useEffect } from "react";
import Header from "./header";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

function Layout({ children }) {
  const [theme, setTheme] = useState("light");


  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <LayoutSection>
        <Header theme={theme} themeToggler={themeToggler} />
        <Main> {children} </Main>
      </LayoutSection>
    </ThemeProvider>
  );
}

export default Layout;

const LayoutSection = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  height: 100%;
  min-height: 100vh;
`;

const Main = styled.main`
  width: 100%;
  max-width: 1280px;
  padding: 40px 0;
  margin: 0 auto;
  padding-left: 2%;
  padding-right: 2%;
  letter-spacing: 0.3px;
  @media screen and (max-width: 1200px) {
    padding: 40px 5%;
  }
  @media screen and (max-width: 992px) {
    padding: 40px 5%;
  }
  @media screen and (max-width: 768px) {
    padding: 40px 5%;
  }
`;
