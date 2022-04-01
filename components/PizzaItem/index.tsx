import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pizza } from "../../redux/ducks/pizzas/state";

import { Button } from "../Button";
import { PlusIcon } from "../Icons/PlusIcon";
import { AddedItem } from "../../redux/ducks/cart/state";
import { addPizza, incrementPizza } from "../../redux/ducks/cart/actionCreator";
import { selectCartState } from "../../redux/ducks/cart/selectors";

interface PizzaItem {
  item: Pizza;
}

export const PizzaItem: React.FC<PizzaItem> = ({ item }) => {
  const [selectedTypeIndex, setSelectedTypeIndex] = React.useState<number>(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = React.useState<number>(0);
  const dispatch = useDispatch();
  const { addedItems } = useSelector(selectCartState);
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
      dispatch(incrementPizza(addedPizzaId));
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

    dispatch(addPizza(addedPizza));
  };

  return (
    <div className="pizza-item">
      <img className="pizza-item__image" src={imageUrl} alt="Pizza" />
      <h3 className="pizza-item__title">{name}</h3>
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
