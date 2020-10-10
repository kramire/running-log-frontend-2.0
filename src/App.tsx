import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { AppWrapper } from "./components";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppWrapper>App Here</AppWrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
