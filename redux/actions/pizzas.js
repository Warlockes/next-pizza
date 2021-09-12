import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export function fetchPizzas(categoryIndex, sortType) {
  console.log(categoryIndex, sortType);
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
    type: "SET_PIZZAS",
    payload: items,
  };
}
