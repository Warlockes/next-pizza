import produce, { Draft } from "immer";
import { CartActions, CartActionType } from "./actionTypes";
import { CartState } from "./state";

const initialCartState: CartState = {
  addedItems: [],
  totalCount: 0,
  totalPrice: 0,
};

export const cartReducer = produce(
  (draft: Draft<CartState>, action: CartActions) => {
    switch (action.type) {
      case CartActionType.ADD_PIZZA:
        draft.addedItems.push(action.payload);
        break;
      case CartActionType.DELETE_PIZZA:
        draft.addedItems = draft.addedItems.filter(
          ({ id }) => id !== action.payload
        );
        break;
      case CartActionType.INCREMENT_PIZZA:
        draft.addedItems.map((item) => {
          if (item.id === action.payload) {
            item.count++;
          }
        });
        break;
      case CartActionType.DECREMENT_PIZZA:
        draft.addedItems.map((item) => {
          if (item.id === action.payload) {
            item.count--;
          }
        });
        break;
      case CartActionType.CLEAR_CART:
        draft.addedItems = [];
        break;
      default:
        break;
    }

    draft.totalPrice = draft.addedItems.reduce(
      (accum, item) => accum + item.pizza.price * item.count,
      0
    );
    draft.totalCount = draft.addedItems.reduce(
      (accum, item) => accum + item.count,
      0
    );
  },
  initialCartState
);
