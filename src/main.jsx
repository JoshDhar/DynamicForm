import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App.jsx";
import theme from "./theme";
// import { FormContext } from "./context/FormContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <FormContext.Provider value={{handleChange}}> */}
      <App />
      {/* </FormContext.Provider> */}
    </ThemeProvider>
  </React.StrictMode>
);
