import Link from "next/link";
import React from "react";
import { selectCartData } from "../../redux/cart/selectors";
import { addItem, incrementItem } from "../../redux/cart/slice";
import { AddedItem } from "../../redux/cart/types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Pizza } from "../../redux/pizzas/types";

import { Button } from "../Button";
import { PlusIcon } from "../Icons/PlusIcon";

interface PizzaItem {
  item: Pizza;
}

export const PizzaItem: React.FC<PizzaItem> = ({ item }) => {
  const [selectedTypeIndex, setSelectedTypeIndex] = React.useState<number>(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = React.useState<number>(0);
  const dispatch = useAppDispatch();
  const { addedItems } = useAppSelector(selectCartData);
  const { imageUrl, name, prices, sizes, types, id } = item;
  const renderedTypes = Object.values(types);
  const doughTypes = Object.keys(types);
  const selectedDoughType = doughTypes[selectedTypeIndex];
  const selectedDoughTypePrices: number[] = prices[selectedDoughType];
  const selectedPizzaPrice = selectedDoughTypePrices[selectedSizeIndex];
  const addedPizzaId = `${selectedTypeIndex}${selectedSizeIndex}${id}`;
  const isAddedPizza = addedItems.find((item) => item.id === addedPizzaId);

  const handleSelectPizzaType = (index: number) => {
    setSelectedTypeIndex(index);
  };

  const handleSelectPizzaSize = (index: number) => {
    setSelectedSizeIndex(index);
  };

  const handleAddPizza = () => {
    if (isAddedPizza) {
      dispatch(incrementItem(addedPizzaId));
      return;
    }

    const addedPizza: AddedItem = {
      id: addedPizzaId,
      count: 1,
      pizza: {
        price: selectedPizzaPrice,
        size: sizes[selectedSizeIndex],
        type: types[selectedDoughType],
        name,
        imageUrl,
      },
    };

    dispatch(addItem(addedPizza));
  };

  return (
    <div className="pizza-item">
      <Link href={`/pizza/${item.id}`}>
        <a>
          <img className="pizza-item__image" src={imageUrl} alt="Pizza" />
          <h3 className="pizza-item__title">{name}</h3>
        </a>
      </Link>
      <div className="pizza-item__selector">
        <ul>
          {renderedTypes.map((type, index) => (
            <li
              key={type}
              className={selectedTypeIndex === index ? "active" : ""}
              onClick={() => handleSelectPizzaType(index)}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {sizes?.map((size, index) => (
            <li
              key={size}
              className={selectedSizeIndex === index ? "active" : ""}
              onClick={() => handleSelectPizzaSize(index)}
            >{`${size} см.`}</li>
          ))}
        </ul>
      </div>
      <div className="pizza-item__bottom">
        <div className="pizza-item__price">{`${selectedPizzaPrice} руб.`}</div>
        <Button className="button_add button_outline" onClick={handleAddPizza}>
          <PlusIcon />
          <span>Добавить</span>
          {isAddedPizza ? <i>{isAddedPizza.count}</i> : null}
        </Button>
      </div>
    </div>
  );
};
