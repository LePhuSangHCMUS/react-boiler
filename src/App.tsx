//lib
import React, { useEffect ,useState} from "react";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'
//Styled Component Config


import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "@Themes/globalStyles";
import { lightTheme, darkTheme } from "@Themes/theme"
import  useDarkMode from "@Hooks/useDarkMode"
import ButtonDarkMode from "@Components/common/ButtonDarkMode/ButtonDarkMode"
//components
import { Div } from "@Components/common/HTMLTag/HTMLTag";
import AppRouter from "./appRoute/AppRoute";
//config
import i18next from "@Configs/i18n/i18n";
//style
import "./app.scss";
import "@StyleSheets/nprogress.scss"
//const
//store
import { Provider } from 'react-redux';
import storeConfig from './reduxs/store';
import { PersistGate } from 'redux-persist/integration/react'

const { store, persistor } = storeConfig()

export default function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  NProgress.start();
  useEffect(() => {
    NProgress.done();
    return () => {
    }
  }, [])
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
