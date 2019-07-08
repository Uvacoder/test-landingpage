import React from "react";

import { ThemeProvider } from "styled-components";

import theme from "utils/theme";

import MainPage from "pages/main/mainPage";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
