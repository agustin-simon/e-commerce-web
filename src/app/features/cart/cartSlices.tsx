import { createSlice } from "@reduxjs/toolkit";
import Product from "../../../models/product.model";

export interface iniState {
  cartItems: Product[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

const initialState: iniState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        let tempProduct: Product = {
          ...action.payload,
          cartQuantity: 1,
          size: 20,
        };
        state.cartItems.push(tempProduct);
      }
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
      }
    },
    clearCart(state, action) {
      state.cartItems = [];
    },
    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          console.log("itemTotal:" + itemTotal);
          console.log("cartQuantity:" + cartQuantity);

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      console.log(quantity);
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
      console.log("asd " + state.cartTotalQuantity);
    },
  },
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } =
  cartSlice.actions;

export const selectAllCartItems = (state: any) => state.cart.cartItems;

export default cartSlice.reducer;
