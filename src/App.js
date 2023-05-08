import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "navigation/RouterConfig";
import { ThemeProvider } from '@mui/material/styles';
import { dark, light } from "styles/muiTheme";
import { ProvideAuth } from "navigation/Auth/ProvideAuth";
import "./App.css";

function App() {

  const [darkState, setDarkState] = useState(false);

  return (
    <>
      <div>
        <ThemeProvider theme={darkState ? dark() : light()}>
          <ProvideAuth>
            <BrowserRouter>
              <RouterConfig />
            </BrowserRouter>
          </ProvideAuth>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
