import { combineReducers } from '@reduxjs/toolkit';
import layoutReducer from "@/redux/Layout/reducer"
// Add other reducers here if you have any
// import otherReducer from './otherReducer';

const rootReducer = combineReducers({
  layout: layoutReducer,
  // otherReducer: otherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
