import { all } from "redux-saga/effects";
import userDataSagas from "./UserData/sagas";
import productSaga from "./products/sagas"

function* rootSaga() {
  yield all([ ...userDataSagas,...productSaga]);
}

export default rootSaga;