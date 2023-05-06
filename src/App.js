import React, { useState } from "react";

import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "navigation/RouterConfig";

import { ThemeProvider } from "@material-ui/core";
// import { ThemeSwitch } from "components/ThemeSwitch";
import { dark, light } from "styles/muiTheme";
import "./App.css";


function App() {

  const [darkState, setDarkState] = useState(false);

  const handleThemeChange = () => {
    setDarkState(!darkState);
    console.log("theme=", darkState ? "dark" : "light");
  };

  return (
    <>
      <div>
        <ThemeProvider theme={darkState ? dark() : light()}>
          {/* <ThemeSwitch
            darkState={darkState}
            handleThemeChange={handleThemeChange}
          /> */}
          <BrowserRouter>
            <RouterConfig />
          </BrowserRouter>

        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
