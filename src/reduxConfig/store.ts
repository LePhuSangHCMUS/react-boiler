import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { fromJS } from 'immutable';
const immutableTransform = require('redux-persist-transform-immutable');

// console.log(process.env)

export const history = createBrowserHistory();
const initialState = fromJS({});
const enhancers = [];
const middleware = [thunkMiddleware, routerMiddleware(history)];
//Config Persistent redux

export const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['loginReducer'],
  transforms: [
    immutableTransform({
      whitelist: ['loginReducer'],
    }),
  ],
  // stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

///Config Redux Dev Tool
if (process.env.REACT_APP_NODE_ENV === 'development') {
  const devToolsExtension = (window as any).devToolsExtension
    ? (window as any).devToolsExtension()
    : (f: any) => f;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension);
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);
const store = createStore<any, any, any, any>(
  persistedReducer,
  composedEnhancers,
);
const persistor = persistStore(store);
export default () => {
  return { store, persistor };
};
