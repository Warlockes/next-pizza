import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersState } from "./types";

const initialState: FiltersState = {
  categoryIndex: null,
  sortType: "popular",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryIndex(state, action: PayloadAction<number | null>) {
      state.categoryIndex = action.payload;
    },

    setSortType(state, action: PayloadAction<string>) {
      state.sortType = action.payload;
    },
  },
});

export const { setCategoryIndex, setSortType } = filterSlice.actions;

export default filterSlice.reducer;
