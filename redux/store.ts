import { configureStore } from "@reduxjs/toolkit";
import pizza from "./pizzas/slice";
import cart from "./cart/slice";
import filter from "./filter/slice";
import { createWrapper } from "next-redux-wrapper";

export function makeStore() {
  return configureStore({
    reducer: {
      pizza,
      cart,
      filter,
    },
  });
}

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper<AppStore>(makeStore);
