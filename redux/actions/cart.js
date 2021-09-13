import { Types } from "../types";

export function addPizzaToCart(pizza) {
  return { type: Types.ADD_PIZZA_TO_CART, payload: pizza };
}
