import produce from "immer";

import { Types } from "../types";

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case Types.ADD_PIZZA_TO_CART: {
        if (!draft.items[action.payload.id]) {
          draft.items[action.payload.id] = [];
        }
        draft.items[action.payload.id].push(action.payload);
        break;
      }
      case Types.CLEAR_CART: {
        draft.items = {};
        break;
      }
      case Types.INCREMENT_PIZZA: {
        draft.items[action.payload].push(draft.items[action.payload][0]);
        break;
      }
      case Types.DECREMENT_PIZZA: {
        if (draft.items[action.payload].length > 1) {
          draft.items[action.payload].shift();
        }
        break;
      }
      case Types.DELETE_PIZZA: {
        delete draft.items[action.payload];
        break;
      }
      default:
        break;
    }
    let totalItems = [].concat(...Object.values(draft.items));
    draft.totalCount = totalItems.length;
    draft.totalPrice = totalItems.reduce(
      (sum, current) => sum + current.price,
      0
    );
  });
};

export default cart;
