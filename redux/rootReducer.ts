import { combineReducers } from "redux";
import { cartReducer } from "./ducks/cart/reducer";
import { filtersReducer } from "./ducks/filters/reducer";
import { pizzasReducer } from "./ducks/pizzas/reducer";

export const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  filters: filtersReducer,
  cart: cartReducer,
});
