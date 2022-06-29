export type SortType = "name" | "rating" | "minPrice";
export type SortOrder = "asc" | "desc";
export type SortParams = {
  id: number;
  name: string;
  type: SortType;
  order: SortOrder;
};

export interface FiltersState {
  categoryIndex: number | null;
  sort: SortParams;
}
