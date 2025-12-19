import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // array of items in the cart
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload); 
    }, //mutating state using immer library internally

    removeItem: (state, action) => { 
      state.items.pop();
    }, //  payload not needed here

    clearCart: (state) => {
      state.items.length = 0; // Clear the cart []
    }
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;