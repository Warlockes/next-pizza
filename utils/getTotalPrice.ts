import { AddedItem } from "../redux/cart/types";

export const getTotalPrice = (items: AddedItem[]) =>
  items.reduce((accum, item) => item.count * item.pizza.price + accum, 0);
