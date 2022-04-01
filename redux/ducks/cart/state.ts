export interface AddedItem {
  pizza: {
    imageUrl: string;
    name: string;
    type: string;
    size: number;
    price: number;
  };
  count: number;
  id: string;
}

export interface CartState {
  addedItems: AddedItem[];
  totalCount: number;
  totalPrice: number;
}
