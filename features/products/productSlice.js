import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// llamada a la API
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (dispatch, getState) => {
    return await fetch("http://localhost:3000/api/data").then((res) =>
      res.json().then((res) => res.products)
    );
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: null,
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getProducts.fulfilled]: (state, action) => {
      state.status = "success";
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const { setProductList } = productSlice.actions;

export default productSlice.reducer;
