import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { CartState } from "./ducks/cart/state";
import { FiltersState } from "./ducks/filters/state";
import { PizzasState } from "./ducks/pizzas/state";

import { rootReducer } from "./rootReducer";

export interface RootState {
  pizzas: PizzasState;
  filters: FiltersState;
  cart: CartState;
}

const composeEnhancers = composeWithDevTools || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk) as any)
);
