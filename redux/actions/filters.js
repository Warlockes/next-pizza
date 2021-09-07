export function setSortBy(sortBy) {
  return { type: "SET_SORT_BY", payload: sortBy };
}

export function setCategory(index) {
  return { type: "SET_CATEGORY", payload: index };
}
