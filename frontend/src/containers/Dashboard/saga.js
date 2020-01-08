import { call, put, takeEvery } from 'redux-saga/effects';
import { getRequest } from '../../utils/api';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchConfig(action) {
   try {
      const user = yield call(getRequest, 'http://localhost:3001');
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* fetchConfigSaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchConfig);
}

export default fetchConfigSaga;
