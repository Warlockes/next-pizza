import {
  FiltersActionType,
  ISetCategoryIndexAction,
  ISetSortTypeAction,
} from "./actionTypes";

export const setCategoryIndex = (
  payload: number | null
): ISetCategoryIndexAction => ({
  type: FiltersActionType.SET_CATEGORY_INDEX,
  payload,
});

export const setSortType = (payload: string): ISetSortTypeAction => ({
  type: FiltersActionType.SET_SORT_TYPE,
  payload,
});
