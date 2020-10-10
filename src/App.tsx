import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppOutterWrapper, AppNavBar, AppInnerWrapper } from "./components";
import { Analytics, Log, Settings } from "./pages";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppOutterWrapper>
          <AppNavBar />
          <AppInnerWrapper>
            <Switch>
              <Route path="/log">
                <Log />
              </Route>
              <Route path="/analytics">
                <Analytics />
              </Route>
              <Route path="/settings">
                <Settings />
              </Route>
              <Route path="/">
                <Log />
              </Route>
            </Switch>
          </AppInnerWrapper>
        </AppOutterWrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
