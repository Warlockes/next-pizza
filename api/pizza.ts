import { AxiosInstance } from "axios";
import { FetchSortedPizzas, Pizza } from "../redux/pizzas/types";

export const PizzaApi = (instance: AxiosInstance) => ({
  async fetchAll() {
    const { data } = await instance.get<Pizza[]>("/pizzas");

    return data;
  },

  async fetchPizzaById(id: string) {
    const { data } = await instance.get<Pizza>(`/pizzas/${id}`);

    return data;
  },

  async fetchSortedPizzas({ categoryIndex, sort }: FetchSortedPizzas) {
    const { data } = await instance.get<Pizza[]>(
      `/pizzas?${
        categoryIndex !== null ? `category=${categoryIndex}` : ""
      }&_sort=${sort.type}&_order=${sort.order}`
    );

    return data;
  },
});
