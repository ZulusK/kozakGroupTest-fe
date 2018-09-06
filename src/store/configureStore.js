import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import { name, version } from '../../package.json';
import rootReducer from '../reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage
};

export default function configureStore(initialState, helpersConfig) {
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const middleware = [thunk];
  const composeEnhancers = composeWithDevTools({
    name: `${name}@${version}`
  });
  const enhancer = composeEnhancers(applyMiddleware(...middleware));

  const store = createStore(persistedReducer, initialState, enhancer);
  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      // eslint-disable-next-line global-require
      store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
}
