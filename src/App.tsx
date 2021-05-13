//lib
import ButtonDarkMode from "@Components/common/ButtonDarkMode/ButtonDarkMode";
//components
import { Div } from "@Components/common/HTMLTag/HTMLTag";
//config
import i18next from "@Configs/i18n/i18n";
import useDarkMode from "@Hooks/useDarkMode";
import { GlobalStyles } from "@Themes/globalStyles";
import { darkTheme, lightTheme } from "@Themes/theme";
import React from "react";
import { I18nextProvider } from "react-i18next";
//const
//store
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
//Styled Component Config
import { ThemeProvider } from "styled-components";
//style
import "./app.scss";
import AppRouter from "./appRoute/AppRoute";
import storeConfig from './reduxs/store';

const { store, persistor } = storeConfig()

export default function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!mountedComponent) return <div/>

  return (
    <Div className="app">
      <ThemeProvider theme={themeMode}>
      <I18nextProvider i18n={i18next}>
      <GlobalStyles/>
        <BrowserRouter>
          <React.Suspense fallback={<div className="fallback" />}>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <AppRouter />
              </PersistGate>
            </Provider>
          </React.Suspense>
        </BrowserRouter>
      </I18nextProvider>
      </ThemeProvider>




<ButtonDarkMode theme={theme} toggleTheme={themeToggler} />
    </Div>
  );
}
