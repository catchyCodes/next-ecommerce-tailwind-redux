import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSagas";

import { Store } from 'redux';
import { Task } from 'redux-saga';

interface ExtendedStore extends Store {
  sagaTask?: Task;
}

const bindMiddleware = (middleware: any) => {
  // if (process.env.NODE_ENV !== "production") {
  //   const { composeWithDevTools } = require("redux-devtools-extension");
  //   return composeWithDevTools(applyMiddleware(...middleware));
  // }
  return applyMiddleware(...middleware);
};

function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  // Create the Redux store with saga middleware
const store: ExtendedStore = createStore(
  rootReducer,
  initialState,
  bindMiddleware([sagaMiddleware])
);
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
