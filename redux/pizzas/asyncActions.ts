import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../../api";
import { FetchSortedPizzas, Pizza } from "./types";

export const fetchPizzas = createAsyncThunk<Pizza[], FetchSortedPizzas>(
  "pizza/fetchPizzas",
  Api.pizza.fetchSortedPizzas
);
