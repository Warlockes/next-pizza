import { Types } from "../types";

export function setSortBy(type) {
  return { type: Types.SET_SORT_BY, payload: type };
}

export function setCategory(index) {
  return { type: Types.SET_CATEGORY, payload: index };
}
