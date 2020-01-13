import { call, put, takeEvery } from 'redux-saga/effects';
import { getRequest } from '../../utils/api';
import { getConfig, successInGettingConfig, errorInGettingConfig } from './reducer';
import { BASE_URL } from  '../../utils/constant';

function* fetchConfig(action) {
   try {
      const data = yield call(getRequest, `${BASE_URL}${action.payload}.json`);
      yield put({ type: successInGettingConfig.type, payload: { data, path: action.payload }});
   } catch (e) {
      yield put({ type: errorInGettingConfig.type, payload: e.message });
   }
}

function* fetchConfigSaga() {
  yield takeEvery(getConfig.type, fetchConfig);
}

export default fetchConfigSaga;
