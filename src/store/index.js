import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { reducer } from './reducers';
import rootSaga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();
const middleware = [ sagaMiddleware ];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export default createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);
