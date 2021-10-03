import React from "react";
import { Home, Analytics, Calendar, Settings } from "./pages";
import { Navbar, Main, LogoHeader } from "./components";
import { DateProvider, UserProvider } from "./contexts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  margin: 0 2em;

  display: grid;
  grid-gap: 1em;

  grid-template-areas:
    "header"
    "main"
    "navbar";

  grid-template-rows: 2fr 16fr 1fr;

  @media (min-width: ${props => props.theme.screen.tablet}) {
    grid-template-areas:
      "header header"
      "navbar main";

    grid-gap: 2em;
    grid-template-rows: 1fr 9fr;
    grid-template-columns: 1fr 4fr;

    padding-bottom: 3em;
  }
`;

export const App = () => {
  return (
    <UserProvider>
      <Wrapper>
        <Router>
          <LogoHeader />
          <Navbar />
          <Main>
            <Switch>
              <Route path="/analytics">
                <Analytics />
              </Route>
              <Route path="/calendar">
                <DateProvider>
                  <Calendar />
                </DateProvider>
              </Route>
              <Route path="/settings">
                <Settings />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Main>
        </Router>
      </Wrapper>
    </UserProvider>
  );
};

export default App;
