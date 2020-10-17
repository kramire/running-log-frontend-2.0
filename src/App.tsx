import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppOutterWrapper, AppNavBar, AppInnerWrapper } from "./components";
import { Analytics, Log, Settings } from "./pages";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { useDispatch } from "react-redux";
import mockData from "./mockData.json";

const App = () => {
  const {
    id,
    unit,
    weekStart,
    optInAlerts,
    username,
    firstName,
    trainingFor,
    runs,
  } = mockData;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "SET_USER",
      data: {
        id,
        unit,
        weekStart,
        optInAlerts,
        username,
        firstName,
        trainingFor,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch({
      type: "SET_RUNS",
      data: runs,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
};

export default App;
