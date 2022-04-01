import { Action } from "redux";
import { LoadingStatus, Pizza } from "./state";

export enum PizzasActionType {
  SET_ITEMS = "pizzas/SET_ITEMS",
  SET_LOADING_STATUS = "pizzas/SET_LOADING_STATUS",
}

export interface ISetItemsAction extends Action<PizzasActionType> {
  type: PizzasActionType.SET_ITEMS;
  payload: Pizza[];
}

export interface ISetLoadingStatusAction extends Action<PizzasActionType> {
  type: PizzasActionType.SET_LOADING_STATUS;
  payload: LoadingStatus;
}

export type PizzasActions = ISetItemsAction | ISetLoadingStatusAction;
