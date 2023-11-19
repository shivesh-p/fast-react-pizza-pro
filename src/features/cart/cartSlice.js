import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: "test pizza",
  //     quantity: 2,
  //     unitPrice: 23,
  //     totalPrice: 46,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, { type, payload }) {
      state.cart.push(payload);
    },
    deleteItem(state, { type, payload }) {
      state.cart = state.cart.filter((t) => t.pizzaId !== payload);
    },
    increaseItemQuantity(state, { type, payload }) {
      const item = state.cart.find((item) => item.pizzaId === payload);
      item.quantity += 1;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, { type, payload }) {
      const item = state.cart.find((item) => item.pizzaId === payload);
      item.quantity -= 1;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0)
        cartSlice.caseReducers.deleteItem(state, { type, payload });
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;
export const gettotalCartItems = (state) =>
  state.cart.cart.reduce((sum, cartItem) => {
    return sum + cartItem.quantity;
  }, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((cartItem) => {
    return cartItem.pizzaId === id;
  })?.quantity ?? 0;

export const gettotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, cartItem) => {
    return sum + cartItem.totalPrice;
  }, 0);
