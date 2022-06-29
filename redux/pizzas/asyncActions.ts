import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza } from "./types";

export const fetchPizzas = createAsyncThunk<
  Pizza[],
  { categoryIndex: number | null; sortType: string }
>("pizza/fetchPizzas", async (params) => {
  const { categoryIndex, sortType } = params;

  const { data } = await axios.get(
    `https://json-server-todo-alex.herokuapp.com/pizzas?${
      categoryIndex !== null ? `category=${categoryIndex}` : ""
    }&_sort=${sortType}&_order=asc`
  );

  return data;
});
