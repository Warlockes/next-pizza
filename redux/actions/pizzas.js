import axios from "axios";
import { Types } from "../types";

export function setLoaded(payload) {
  return { type: Types.SET_LOADED, payload };
}

export function fetchPizzas(categoryIndex, sortType) {
  return function (dispatch) {
    dispatch(setLoaded(false));
    axios
      .get(
        `https://json-server-todo-alex.herokuapp.com/pizzas?${
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
