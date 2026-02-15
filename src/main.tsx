import  { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import App from "./App";
import { getTheme } from "./theme/theme";

function Root() {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      <BrowserRouter>
        <App
          mode={mode}
          toggle={() => setMode((m) => (m === "light" ? "dark" : "light"))}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);
