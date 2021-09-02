import React, { useState } from "react";

import PropTypes from "prop-types";

import { Button } from "./";

function PizzaItem({ name, imageUrl, price, sizes, types }) {
  const [selectedPizzaSizeId, setSelectedPizzaSizeId] = useState(0);
  const [selectedPizzaTypeId, setSelectedPizzaTypeId] = useState(0);

  const onSelectPizzaSize = (id) => {
    setSelectedPizzaSizeId(id);
  };

  const onSelectPizzaType = (id) => {
    setSelectedPizzaTypeId(id);
  };

  return (
    <>
      <div className="pizza-item">
        <img className="pizza-item__image" src={imageUrl} alt="Pizza" />
        <h3 className="pizza-item__title">{name}</h3>
        <div className="pizza-item__selector">
          <ul>
            {types?.map((type, index) => (
              <li
                key={type}
                className={selectedPizzaTypeId === index ? "active" : ""}
                onClick={() => onSelectPizzaType(index)}
              >
                {type}
              </li>
            ))}
          </ul>
          <ul>
            {sizes?.map((size, index) => (
              <li
                key={size}
                className={selectedPizzaSizeId === index ? "active" : ""}
                onClick={() => onSelectPizzaSize(index)}
              >{`${size} см.`}</li>
            ))}
          </ul>
        </div>
        <div className="pizza-item__bottom">
          <div className="pizza-item__price">{`от ${price} руб.`}</div>
          <Button className="button_add button_outline">
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
            <i>2</i>
          </Button>
        </div>
      </div>
    </>
  );
}

PizzaItem.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  sizes: PropTypes.arrayOf(PropTypes.number),
  types: PropTypes.arrayOf(PropTypes.string),
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
