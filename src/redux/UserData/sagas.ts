import { call, put, takeLatest } from "redux-saga/effects";

import { actionTypes } from "./actions";

import api from "./api";
import axios from "axios";
import { notifeColors, setNotife } from "../Layout/reducer";

function* loadDataSaga() {
  try {
    const {data} = yield call (()=>axios.get("https://jsonplaceholder.typicode.com/todos/1"));
    yield put(setNotife({ message: data.id, color: notifeColors.success }))
  
  } catch (err) {
    yield put(setNotife({ message:`${err}`, color: notifeColors.error }))

  }
}

const sagas = [takeLatest(actionTypes.LOAD_DATA, loadDataSaga)];

export default sagas;
