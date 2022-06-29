import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SORT_BY } from "../../constants";
import { FiltersState, SortParams } from "./types";

const initialState: FiltersState = {
  categoryIndex: null,
  sort: SORT_BY[0],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryIndex(state, action: PayloadAction<number | null>) {
      state.categoryIndex = action.payload;
    },

    setSort(state, action: PayloadAction<SortParams>) {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryIndex, setSort } = filterSlice.actions;

export default filterSlice.reducer;
