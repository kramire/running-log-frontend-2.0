import React from "react";
import { Navbar, Main, LogoHeader } from "./components";
import { Home } from "./pages";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  margin: 0 2em;

  display: grid;
  grid-gap: 2em;

  grid-template-areas:
    "header"
    "main"
    "navbar";

  grid-template-rows: 1fr 16fr 1fr;

  @media (min-width: ${props => props.theme.screen.tablet}) {
    grid-template-areas:
      "header header"
      "navbar main";

    grid-template-rows: 1fr 9fr;
    grid-template-columns: 1fr 4fr;

    padding-bottom: 3em;
  }
`;

export const App = () => {
  return (
    <Wrapper>
      <LogoHeader />
      <Navbar />
      <Main>
        <Home />
      </Main>
    </Wrapper>
  );
};

export default App;
