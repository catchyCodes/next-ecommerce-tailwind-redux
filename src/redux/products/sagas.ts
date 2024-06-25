import { call, put, takeLeading } from "redux-saga/effects";
import { actionTypes } from "./actions";
import Api, {
  AllParams,
  ApiResponse,
  Collections,
} from "@/libs/api";
import { addProducts, setStatics } from "./reducer";

function* paginatedSaga(action: { type: string; payload: AllParams }) {

  try {
    const api = new Api();
    const result: ApiResponse = yield call([api, api.getPaginatedList], {...action.payload,collection:Collections.Products});
    if (result) {
      yield put(addProducts({items:result.items}));
      yield put(
        setStatics({
          totalItems: result.totalItems,
          page: result.page,
          perPage: result.perPage,
        })
      );
    }
  } catch (error) {
    console.error("Error in paginatedSaga:", error);
  }
}

const sagas = [takeLeading(actionTypes.LOAD_ALL_PRODUCTS, paginatedSaga)];
export default sagas;
