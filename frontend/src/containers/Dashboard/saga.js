import { call, put, takeEvery } from 'redux-saga/effects';
import { getRequest } from '../../utils/api';
import { getConfig, successInGettingConfig, errorInGettingConfig } from './reducer';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchConfig(action) {
   try {
      const data = yield call(getRequest, 'http://localhost:3001/data1.json');
      yield put({ type: successInGettingConfig.type, payload: data });
   } catch (e) {
      yield put({ type: errorInGettingConfig.type, payload: e.message });
   }
}

function* fetchConfigSaga() {
  yield takeEvery(getConfig.type, fetchConfig);
}

export default fetchConfigSaga;
