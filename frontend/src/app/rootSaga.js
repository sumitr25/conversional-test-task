import createSagaMiddleware from 'redux-saga';
import fetchConfigSaga from '../containers/Dashboard/saga';

const sagaMiddleware = createSagaMiddleware()

export const startSaga = () => {
  sagaMiddleware.run(fetchConfigSaga);
}

export default sagaMiddleware;
