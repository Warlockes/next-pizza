import { RootState } from "../../store";
import { PizzasState } from "./state";

export const selectPizzasState = (state: RootState): PizzasState =>
  state.pizzas;
