import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { capitalize } from "../lib/utils";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: auto;
  padding: 2em;

  * {
    color: ${props => props.theme.colors.primary};
    font-size: 18px;

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: ${props => props.theme.screenSize.tablet}) {
    z-index: 1;
    padding: 1em;
  }
`;

const MenuWrapper = styled.div<{ isMenuOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${props => props.theme.colors.secondary} > a {
    margin-left: 1em;
  }
  background-color: #1a222d;

  @media (max-width: ${props => props.theme.screenSize.tablet}) {
    z-index: 0;

    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    height: -webkit-fill-available;

    margin: 0 0 0 45%;
    padding-left: 7vw;
    padding-right: 7vw;

    opacity: ${props => (props.isMenuOpen ? "1" : "0")}; /* fade out */
    transform: ${props =>
      props.isMenuOpen ? "translateX(0)" : "translateX(100%)"}; /* fade out */
    transition: transform 0.3s, opacity 0.3s;
  }
`;

const MenuIcon = styled(Icon)`
  &&&&&& {
    display: none;

    @media (max-width: ${props => props.theme.screenSize.tablet}) {
      z-index: 1;
      display: initial;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const MenuOption = styled.div`
  padding: 0 1em;

  > * {
    padding-left: 0.5em;
  }

  @media (max-width: ${props => props.theme.screenSize.tablet}) {
    padding: 1em 0;
    font-size: 20px;
  }
`;

export const AppNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const history = useHistory();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const changePage = (path: string) => () => {
    history.push(`/${path}`);
    setIsMenuOpen(false);
  };

  const menuOptions: { name: string; link: string; icon: string }[] = [
    { name: "log", link: "log", icon: "home" },
    { name: "analytics", link: "analytics", icon: "chart line" },
    { name: "settings", link: "settings", icon: "setting" },
  ];

  return (
    <Wrapper>
      <div onClick={() => history.push("/")}>Running Log</div>
      {isMenuOpen ? (
        <MenuIcon name="close" size="large" onClick={toggleMenu} />
      ) : (
        <MenuIcon name="align justify" size="large" onClick={toggleMenu} />
      )}
      <MenuWrapper isMenuOpen={isMenuOpen}>
        {menuOptions.map((option, idx) => (
          <MenuOption key={idx} onClick={changePage(option.link)}>
            <span>{capitalize(option.name)}</span>
            <Icon className={option.icon} />
          </MenuOption>
        ))}
      </MenuWrapper>
    </Wrapper>
  );
};
