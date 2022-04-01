import { RootState } from "../../store";
import { CartState } from "./state";

export const selectCartState = (state: RootState): CartState => state.cart;
