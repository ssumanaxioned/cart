import axios from "axios"
import {takeEvery,put,call} from 'redux-saga/effects'

export function* fetchApi() {
  try {
    const user = yield call(axios.get, 'https://fakestoreapi.com/products')
  yield put({type: 'FETCH_API_RECIEVED', payload: user.data})
  } catch (err) {
    yield put ({type: 'FETCH_API_ERROR', payload: err})
  }
}

export default function* watchFetchApi() {
  yield takeEvery('FETCH_API_REQUEST', fetchApi)
}

