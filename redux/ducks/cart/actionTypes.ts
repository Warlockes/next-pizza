import { Action } from "redux";
import { AddedItem } from "./state";

export enum CartActionType {
  ADD_PIZZA = "cart/ADD_PIZZA",
  DELETE_PIZZA = "cart/DELETE_PIZZA",
  INCREMENT_PIZZA = "cart/INCREMENT_PIZZA",
  DECREMENT_PIZZA = "cart/DECREMENT_PIZZA",
  CLEAR_CART = "cart/CLEAR_CART",
}

export interface IAddPizzaAction extends Action<CartActionType> {
  type: CartActionType.ADD_PIZZA;
  payload: AddedItem;
}

export interface IDeletePizzaAction extends Action<CartActionType> {
  type: CartActionType.DELETE_PIZZA;
  payload: string;
}

export interface IIncrementPizzaAction extends Action<CartActionType> {
  type: CartActionType.INCREMENT_PIZZA;
  payload: string;
}

export interface IDecrementPizzaAction extends Action<CartActionType> {
  type: CartActionType.DECREMENT_PIZZA;
  payload: string;
}

export interface IClearCartAction extends Action<CartActionType> {
  type: CartActionType.CLEAR_CART;
}

export type CartActions =
  | IAddPizzaAction
  | IDeletePizzaAction
  | IIncrementPizzaAction
  | IDecrementPizzaAction
  | IClearCartAction;
