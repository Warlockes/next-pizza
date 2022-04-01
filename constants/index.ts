export const CATEGORIES = [
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Акционные",
];

export const SORT_BY = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "minPrice" },
  { name: "алфавиту", type: "name" },
];

export const loaderItemsCount = Array.from(Array(4).keys());

export enum Routes {
  Home = "/",
  Cart = "/cart",
}
