import * as React from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { pokeTheme } from "./pokeTheme";

export const AppTheme = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider theme={ pokeTheme }>
      <CssBaseline />
      { children }
    </ThemeProvider>
  );
};
