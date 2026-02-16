import  { useState } from "react";
import ReactDOM from "react-dom/client";
import {HashRouter} from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import App from "./App";
import { getTheme } from "./theme/theme";

function Root() {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      <HashRouter>
        <App
          mode={mode}
          toggle={() => setMode((m) => (m === "light" ? "dark" : "light"))}
        />
      </HashRouter>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);
