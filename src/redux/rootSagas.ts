import { all } from "redux-saga/effects";

import clockSagas from "./Clock/sagas";
import userDataSagas from "./UserData/sagas";

function* rootSaga() {
  yield all([ ...userDataSagas]);
}

export default rootSaga;
