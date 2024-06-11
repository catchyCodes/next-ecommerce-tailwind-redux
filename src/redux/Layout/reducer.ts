import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Notife {
  isTriggerd: boolean;
  message: string;
  color: string;
}

interface LayoutState {
  loadingArr: number[];
  notife: Notife;
}

const initialState: LayoutState = {
  loadingArr: [],
  notife: { isTriggerd: false, message: '', color: '' },
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    addLoading: (state) => {
      state.loadingArr.push(0);
    },
    reduceLoading: (state) => {
      state.loadingArr.pop();
    },
    setNotife: (state, action: PayloadAction<{ message: string; color: string }>) => {
      state.notife = {
        isTriggerd: true,
        message: action.payload.message,
        color: action.payload.color,
      };
    },
    clearNotife: (state) => {
      state.notife = { isTriggerd: false, message: '', color: '' };
    },
  },
});

const notifeColors = {
  error: 'error',
  warning: 'warning',
  success: 'success',
  info: 'info',
};

export { notifeColors };
export const { addLoading, reduceLoading, setNotife, clearNotife } = layoutSlice.actions;
export default layoutSlice.reducer;
