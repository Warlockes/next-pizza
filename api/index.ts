import axios from "axios";
import { PizzaApi } from "./pizza";

export type ApiReturnType = {
  pizza: ReturnType<typeof PizzaApi>;
};

const instance = axios.create({
  baseURL: "https://json-server-todo-alex.herokuapp.com",
});

export const Api: ApiReturnType = {
  pizza: PizzaApi(instance),
};
