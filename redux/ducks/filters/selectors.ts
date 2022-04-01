import { RootState } from "../../store";
import { FiltersState } from "./state";

export const selectFiltersState = (state: RootState): FiltersState =>
  state.filters;
