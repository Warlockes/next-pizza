import { Types } from "../types";

export function addPizzaToCart(pizza) {
  return { type: Types.ADD_PIZZA_TO_CART, payload: pizza };
}

export function clearCart() {
  return { type: Types.CLEAR_CART };
}

export function incrementPizza(id) {
  return { type: Types.INCREMENT_PIZZA, payload: id };
}

export function decrementPizza(id) {
  return { type: Types.DECREMENT_PIZZA, payload: id };
}

export function deletePizza(id) {
  return { type: Types.DELETE_PIZZA, payload: id };
}
