//lib
import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

//components
import { Div } from '@Common/TagAntdNotSupport/TagAntdNotSupport';
import AppRouter from '@Utils/AppRoute/AppRoute';
//config
import i18next from '@Configs/i18n/i18n';
//style
import './app.scss';
import '@StyleSheets/nprogress.scss';
//const
//store
import { Provider } from 'react-redux';
import storeConfig from './reduxConfig/store';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = storeConfig();

export default function App() {
  NProgress.start();
  useEffect(() => {
    NProgress.done();
    return () => {};
  }, []);
  return (
    <Div className="app">
      <I18nextProvider i18n={i18next}>
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
    </Div>
  );
}
