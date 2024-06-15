import { call, takeLatest } from "redux-saga/effects";

import { actionTypes } from "./actions";

import api from "./api";
import axios from "axios";

function* loadDataSaga() {
  try {
    const {data} = yield call (()=>axios.get("https://jsonplaceholder.typicode.com/todos/1"));


  
  } catch (err) {

  }
}

const sagas = [takeLatest(actionTypes.LOAD_DATA, loadDataSaga)];

export default sagas;
