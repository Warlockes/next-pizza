import React, { useState, memo } from "react";
import { useSelector } from "react-redux";

import PropTypes from "prop-types";

import { Button } from "..";

const PizzaItem = memo(function PizzaItem({
  onAddToCart,
  name,
  imageUrl,
  price,
  sizes,
  types,
  id,
}) {
  const [selectedPizzaSize, setSelectedPizzaSize] = useState(sizes[0]);
  const [selectedPizzaType, setSelectedPizzaType] = useState(types[0]);
  const { items } = useSelector(({ cart }) => ({
    items: cart.items,
  }));

  const onSelectPizzaSize = (size) => {
    setSelectedPizzaSize(size);
  };

  const onSelectPizzaType = (type) => {
    setSelectedPizzaType(type);
  };

  const onAddItem = () => {
    const item = {
      id,
      name,
      imageUrl,
      price,
      size: selectedPizzaSize,
      type: selectedPizzaType,
    };
    onAddToCart(item);
  };

  return (
    <>
      <div className="pizza-item">
        <img className="pizza-item__image" src={imageUrl} alt="Pizza" />
        <h3 className="pizza-item__title">{name}</h3>
        <div className="pizza-item__selector">
          <ul>
            {types?.map((type) => (
              <li
                key={type}
                className={selectedPizzaType === type ? "active" : ""}
                onClick={() => onSelectPizzaType(type)}
              >
                {type}
              </li>
            ))}
          </ul>
          <ul>
            {sizes?.map((size) => (
              <li
                key={size}
                className={selectedPizzaSize === size ? "active" : ""}
                onClick={() => onSelectPizzaSize(size)}
              >{`${size} см.`}</li>
            ))}
          </ul>
        </div>
        <div className="pizza-item__bottom">
          <div className="pizza-item__price">{`от ${price} руб.`}</div>
          <Button className="button_add button_outline" onClick={onAddItem}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {items[id] ? <i>{items[id].length}</i> : null}
          </Button>
        </div>
      </div>
    </>
  );
});

PizzaItem.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  sizes: PropTypes.arrayOf(PropTypes.number),
  types: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.number.isRequired,
};

PizzaItem.defaultProps = {
  name: "---",
  imageUrl:
    "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
  price: 0,
  sizes: [],
  types: [],
};

export default PizzaItem;
