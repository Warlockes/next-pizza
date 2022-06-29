import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchPizza, Pizza } from "./types";

export const fetchPizzas = createAsyncThunk<Pizza[], FetchPizza>(
  "pizza/fetchPizzas",
  async ({ categoryIndex, sort }) => {
    const { data } = await axios.get(
      `https://json-server-todo-alex.herokuapp.com/pizzas?${
        categoryIndex !== null ? `category=${categoryIndex}` : ""
      }&_sort=${sort.type}&_order=${sort.order}`
    );

    return data;
  }
);
