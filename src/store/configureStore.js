import devTools from 'remote-redux-devtools'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import reducer from '../reducers'
import logger from 'redux-logger'
import analytics from '/services/middleware/analytics'

import './configureReactotron'

export default function configureStore(onCompletion) {
  const enhancer = compose(
    applyMiddleware(thunk, logger, analytics),
    devTools({
      name: 'aiirush',
      realtime: true
    })
  );

  const store = createStore(reducer, enhancer);
  persistStore(store, onCompletion);

  return store;
}
