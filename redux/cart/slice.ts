import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddedItem, CartState } from "./types";
import { getTotalPrice } from "../../utils/getTotalPrice";

const initialState: CartState = {
  addedItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<AddedItem>) {
      state.addedItems.push(action.payload);

      state.totalPrice = getTotalPrice(state.addedItems);
    },

    incrementItem(state, action: PayloadAction<string>) {
      const findItem = state.addedItems.find(
        (item) => item.id === action.payload
      );

      if (findItem) {
        findItem.count++;
      }

      state.totalPrice = getTotalPrice(state.addedItems);
    },

    decrementItem(state, action: PayloadAction<string>) {
      const findItem = state.addedItems.find(
        (item) => item.id === action.payload
      );

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = getTotalPrice(state.addedItems);
    },

    removeItem(state, action: PayloadAction<string>) {
      state.addedItems = state.addedItems.filter(
        (item) => item.id !== action.payload
      );
      state.totalPrice = getTotalPrice(state.addedItems);
    },

    clearCart(state) {
      state.addedItems = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, incrementItem, decrementItem, removeItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
