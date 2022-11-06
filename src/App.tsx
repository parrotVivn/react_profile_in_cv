import { createTheme, CssBaseline, ThemeProvider, useTheme } from "@mui/material";
import * as locales from "@mui/material/locale";
import React from "react";
import { useRoutes } from "react-router-dom";
import "./plugins/i18n";
import { MuiMode } from "./plugins/mui/themeProvider";
import { NotAuth, Auth } from "./router";
import { AppProvider, initialAppState, reducerApp } from "./store/_hookReducerStore/app";

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });
type SupportedLocales = keyof typeof locales;

function App() {
  const [state, dispatch] = React.useReducer(reducerApp, initialAppState);
  const value = { state, dispatch };
  const _theme = useTheme();
  _theme.palette.mode = value.state.mode
  const [locale,] = React.useState<SupportedLocales>(value.state.lang);
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        return _theme.palette.mode;
      },
    }),
    [_theme.palette.mode]
  );
  const theme = React.useMemo(
    () => createTheme(MuiMode.getMode(_theme.palette.mode), locales[locale]),
    [locale, _theme.palette.mode]
  );
  return (
    <AppProvider.Provider value={value}>
      <ColorModeContext.Provider value={colorMode}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          {useRoutes([NotAuth])}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </AppProvider.Provider>
  );
}

export default App;
