import { Action } from "redux";

export enum FiltersActionType {
  SET_CATEGORY_INDEX = "filters/SET_CATEGORY_INDEX",
  SET_SORT_TYPE = "filters/SET_SORT_TYPE",
}

export interface ISetCategoryIndexAction extends Action<FiltersActionType> {
  type: FiltersActionType.SET_CATEGORY_INDEX;
  payload: number | null;
}

export interface ISetSortTypeAction extends Action<FiltersActionType> {
  type: FiltersActionType.SET_SORT_TYPE;
  payload: string;
}

export type FiltersActions = ISetCategoryIndexAction | ISetSortTypeAction;
