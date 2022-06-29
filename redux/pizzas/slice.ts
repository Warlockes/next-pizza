import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPizzas } from "./asyncActions";
import { LoadingStatus, Pizza, PizzaSliceState } from "./types";

const initialState: PizzaSliceState = {
  items: [],
  loadingStatus: LoadingStatus.NEVER,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
    setLoadingStatus(state, action: PayloadAction<LoadingStatus>) {
      state.loadingStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.items = [];
      state.loadingStatus = LoadingStatus.LOADING;
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loadingStatus = LoadingStatus.LOADED;
    });

    builder.addCase(fetchPizzas.rejected, (state) => {
      state.items = [];
      state.loadingStatus = LoadingStatus.ERROR;
    });
  },
});

export const { setItems, setLoadingStatus } = pizzaSlice.actions;

export default pizzaSlice.reducer;
