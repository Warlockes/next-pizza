import axios from "axios";
import { Dispatch } from "redux";
import {
  ISetItemsAction,
  ISetLoadingStatusAction,
  PizzasActionType,
} from "./actionTypes";
import { LoadingStatus, Pizza } from "./state";

export const setPizzas = (payload: Pizza[]): ISetItemsAction => ({
  type: PizzasActionType.SET_ITEMS,
  payload,
});

export const setLoadingStatus = (
  payload: LoadingStatus
): ISetLoadingStatusAction => ({
  type: PizzasActionType.SET_LOADING_STATUS,
  payload,
});

export const fetchPizzas = (categoryIndex: number | null, sortType: string) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(setLoadingStatus(LoadingStatus.LOADING));

    const { data } = await axios.get(
      `https://json-server-todo-alex.herokuapp.com/pizzas?${
        categoryIndex !== null ? `category=${categoryIndex}` : ""
      }&_sort=${sortType}&_order=asc`
    );

    dispatch(setPizzas(data));
    dispatch(setLoadingStatus(LoadingStatus.LOADED));
  };
};
