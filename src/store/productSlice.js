import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = { data: [], status: "idle" };

const productSlice = createSlice({
  name: "Products",
  initialState,

  reducers: {
    fetchProducts(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.status = action.payload;
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

// it is first function technique to call for api using thunk middleware

export const getProducts = createAsyncThunk("product/get", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();
  return result;
});

// its a function for api request and its choice for you which one function is used for request
// using thunk function or simple its your it is a simple function without using thunk

// export function getProducts() {
//   return async function getProductsThunk(dispatch, getstate) {
//     const data = await fetch("https://fakestoreapi.com/products");
//     const result = await data.json();
//     dispatch(fetchProducts(result));
//   };
// }
