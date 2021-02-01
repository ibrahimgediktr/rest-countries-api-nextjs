import React, { useState } from "react";
import styled from "styled-components";
import { BiMoon } from "react-icons/bi";

function Header({ theme, themeToggler }) {


  return (
    <HeaderSection>
      <HeaderContainer>
        <HeaderLogo>Where in the world ?</HeaderLogo>
        <HeaderPageMode theme={theme} onClick={themeToggler}>
          <LightIcon />
          <ModeName>Dark Mode</ModeName>
        </HeaderPageMode>
      </HeaderContainer>
    </HeaderSection>
  );
}

export default Header;

const HeaderSection = styled.header`
  box-shadow: 0px 1px 4px 1px ${(props) => props.theme.shadow};
  background-color: ${(props) => props.theme.input};
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 2%;
  padding-right: 2%;
  @media screen and (max-width: 1200px) {
    padding: 0 5%;
  }
`;
const HeaderLogo = styled.div`
  font-weight: 800;
`;
const HeaderPageMode = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  cursor:pointer;
`;
const LightIcon = styled(BiMoon)`
  margin-right: 10px;
  font-weight: 800;
  font-size: 16px;
  color: ${(props) => props.theme.text};
`;
const ModeName = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme.text};
  letter-spacing: 0.5px;
`;
