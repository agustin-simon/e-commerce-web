import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import products from "../../../data/productsApi";

//Url de la api a consumir
const PRODUCTS_URL = "";

// Funcion para consumir la api con Axios
// export const productsFetch = createAsyncThunk("produts/productsFetch", async () => {
//     const res = await axios.get(PRODUCTS_URL)
//     return res.data;
// });

const initialState = {
  items: products,
  size: products.length,
  status: null,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // builder
    //     .addCase(productsFetch.pending, (state, action) => {
    //         state.status = 'loading';
    //     })
    //     .addCase(productsFetch.fulfilled, (state, action) => {
    //         state.status = 'succeeded';
    //         state.items = action.payload;
    //     })
    //     .addCase(productsFetch.rejected, (state, action) => {
    //         state.status = 'rejected';
    //         state.error = action.payload;
    //     })
  },
});

export const selectAllProducts = (state: any) => state.products.items;

export const selectProductsAmount = (state: any) => state.products.size;

export default productsSlice.reducer;
