import produce, { Draft } from "immer";
import { FiltersActions, FiltersActionType } from "./actionTypes";
import { FiltersState } from "./state";

const initialFiltersState: FiltersState = {
  categoryIndex: null,
  sortType: "popular",
};

export const filtersReducer = produce(
  (draft: Draft<FiltersState>, action: FiltersActions) => {
    switch (action.type) {
      case FiltersActionType.SET_CATEGORY_INDEX:
        draft.categoryIndex = action.payload;
        break;
      case FiltersActionType.SET_SORT_TYPE:
        draft.sortType = action.payload;
      default:
        break;
    }
  },
  initialFiltersState
);
