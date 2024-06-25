import { Collections } from "@/libs/api";
import { createSlice } from "@reduxjs/toolkit";

export interface ProductsState {
  collection: Collections.Products;
  items: object[];
  page: number;
  perPage: number;
  totalItems: number;
  sort?: string;
  filter?: string;
  expand?: string;
}

const initialState: ProductsState = {
  collection: Collections.Products,
  items: [],
  page: 1,
  perPage: 50,
  totalItems: 0,
  sort: undefined,
  filter: undefined,
  expand: undefined,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      const { items } = action.payload;
      state.items.push(...items);
    },
    setProducts: (state, action) => {
      state.items = action.payload.items;
    },
    setStatics: (state, action) => {
      const { totalItems, page, perPage } = action.payload;
      return { ...state, totalItems, page, perPage };
    },
    setPage: (state, action) => {
      state.page = action.payload.page;
    },
  },
});

export const productsBridge = (state: any): ProductsState => state.products;
export const { addProducts, setProducts, setStatics, setPage } =
  productsSlice.actions;
export default productsSlice.reducer;
