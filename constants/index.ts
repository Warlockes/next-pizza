import { SortParams } from "../redux/filter/types";

export const CATEGORIES = [
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Акционные",
];

export const SORT_BY: SortParams[] = [
  { id: 1, name: "популярности (вз)", type: "rating", order: "asc" },
  { id: 2, name: "популярности (уб)", type: "rating", order: "desc" },
  { id: 3, name: "цене (вз)", type: "minPrice", order: "asc" },
  { id: 4, name: "цене (уб)", type: "minPrice", order: "desc" },
  { id: 5, name: "алфавиту (вз)", type: "name", order: "asc" },
  { id: 6, name: "алфавиту (уб)", type: "name", order: "desc" },
];

export const loaderItemsCount = Array.from(Array(4).keys());

export enum Routes {
  Home = "/",
  Cart = "/cart",
}
