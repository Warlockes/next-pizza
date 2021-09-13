import axios from "axios";
import { Types } from "../types";

export const setLoaded = (payload) => ({
  type: Types.SET_LOADED,
  payload,
});

export function fetchPizzas(categoryIndex, sortType) {
  return function (dispatch) {
    dispatch(setLoaded(false));
    axios
      .get(
        `http://localhost:3001/pizzas?${
          categoryIndex !== null ? `category=${categoryIndex}` : ""
        }&_sort=${sortType}&_order=asc`
      )
      .then(({ data }) => {
        dispatch(setPizzas(data));
      });
  };
}

export function setPizzas(items) {
  return {
    type: Types.SET_PIZZAS,
    payload: items,
  };
}
