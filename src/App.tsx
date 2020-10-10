import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { AppWrapper, AppNavBar } from "./components";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <AppNavBar />
        </AppWrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
