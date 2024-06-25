import { combineReducers } from '@reduxjs/toolkit';
import layoutReducer from "@/redux/Layout/reducer";
import productsReducer from "@/redux/products/reducer"
// Add other reducers here if you have any
// import otherReducer from './otherReducer';

const rootReducer = combineReducers({
  layout: layoutReducer,
  products: productsReducer,
  // otherReducer: otherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
