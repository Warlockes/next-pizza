export interface Pizza {
  id: number;
  imageUrl: string;
  name: string;
  types: {
    thin?: string;
    traditional?: string;
  };
  sizes: number[];
  prices: {
    thin?: number[];
    traditional?: number[];
  };
  category: number;
  rating: number;
}

export enum LoadingStatus {
  NEVER = "NEVER",
  LOADING = "LOADING",
  LOADED = "LOADED",
}

export interface PizzasState {
  items: Pizza[];
  loadingStatus: LoadingStatus;
}
