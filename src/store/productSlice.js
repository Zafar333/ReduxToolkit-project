import { createSlice } from "@reduxjs/toolkit";
const initialState = { data: [] };

const productSlice = createSlice({
  name: "Products",
  initialState,

  reducers: {
    fetchProducts(state, action) {
      state.data = action.payload;
    },
  },
});
export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export function getProducts() {
  return async function getProductsThunk(dispatch, getstate) {
    const data = await fetch("https://fakestoreapi.com/products");
    const result = await data.json();
    dispatch(fetchProducts(result));
  };
}
