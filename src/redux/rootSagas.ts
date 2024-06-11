import { all, put } from "redux-saga/effects";
import userDataSagas from "./UserData/sagas";
import { addLoading, reduceLoading } from "./Layout/reducer";

function* rootSaga() {
  yield put(addLoading());
  yield all([ ...userDataSagas]);
  yield put(reduceLoading());
}

export default rootSaga;
