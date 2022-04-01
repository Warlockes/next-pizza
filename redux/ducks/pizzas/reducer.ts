import produce, { Draft } from "immer";
import { PizzasActions, PizzasActionType } from "./actionTypes";
import { LoadingStatus, PizzasState } from "./state";

const initialPizzasState: PizzasState = {
  items: [],
  loadingStatus: LoadingStatus.NEVER,
};

export const pizzasReducer = produce(
  (draft: Draft<PizzasState>, action: PizzasActions) => {
    switch (action.type) {
      case PizzasActionType.SET_ITEMS:
        draft.items = action.payload;
        break;
      case PizzasActionType.SET_LOADING_STATUS:
        draft.loadingStatus = action.payload;
      default:
        break;
    }
  },
  initialPizzasState
);
