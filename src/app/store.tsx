import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../app/features/products/productsSlice";
import cartReducer from "../app/features/cart/cartSlices";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
