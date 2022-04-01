import {
  CartActionType,
  IAddPizzaAction,
  IClearCartAction,
  IDecrementPizzaAction,
  IDeletePizzaAction,
  IIncrementPizzaAction,
} from "./actionTypes";
import { AddedItem } from "./state";

export const addPizza = (payload: AddedItem): IAddPizzaAction => ({
  type: CartActionType.ADD_PIZZA,
  payload,
});

export const deletePizza = (payload: string): IDeletePizzaAction => ({
  type: CartActionType.DELETE_PIZZA,
  payload,
});

export const incrementPizza = (payload: string): IIncrementPizzaAction => ({
  type: CartActionType.INCREMENT_PIZZA,
  payload,
});

export const decrementPizza = (payload: string): IDecrementPizzaAction => ({
  type: CartActionType.DECREMENT_PIZZA,
  payload,
});

export const clearCart = (): IClearCartAction => ({
  type: CartActionType.CLEAR_CART,
});
