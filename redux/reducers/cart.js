import { Types } from "../types";

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

function cart(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_PIZZA_TO_CART: {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };
      const totalItems = [].concat.apply([], Object.values(newItems));
      const totalPrice = totalItems.reduce(
        (sum, current) => sum + current.price,
        0
      );

      return {
        ...state,
        items: newItems,
        totalCount: totalItems.length,
        totalPrice,
      };
    }
    default: {
      return state;
    }
  }
}

export default cart;
