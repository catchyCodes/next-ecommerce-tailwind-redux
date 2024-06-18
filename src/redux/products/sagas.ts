import { call, takeLeading } from "redux-saga/effects";
import { actionTypes } from "./actions";
import Api, { Collections } from "@/libs/api";

function* loadDataSaga() {
  try {
    const api = new Api();
    api.getPaginatedList(Collections.Products)
    .then(resultList => {
        console.log('Paginated List:', resultList);
    })
    .catch(error => {
        console.error('Error:', error);
    });

  } catch (err) {

  }
}

const sagas = [takeLeading(actionTypes.LOAD_ALL_PRODUCTS, loadDataSaga)];

export default sagas;
