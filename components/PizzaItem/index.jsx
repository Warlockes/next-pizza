import React, { useState, memo } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { Button } from "..";

const PizzaItem = memo(function PizzaItem({
  onAddToCart,
  id,
  name,
  imageUrl,
  prices,
  sizes,
  types,
}) {
  const renderedTypes = Object.values(types);
  const [selectedSizeId, setSelectedPizzaSizeId] = useState(0);
  const [selectedTypeId, setSelectedPizzaTypeId] = useState(0);
  const selectedPizzaPrice =
    prices[Object.keys(types)[selectedTypeId]][selectedSizeId];
  const selectedSize = sizes[selectedSizeId];
  const { items } = useSelector(({ cart }) => ({
    items: cart.items,
  }));

  const onSelectPizzaSize = (sizeId) => {
    setSelectedPizzaSizeId(sizeId);
  };

  const onSelectPizzaType = (typeId) => {
    setSelectedPizzaTypeId(typeId);
  };

  const onAddItem = () => {
    const item = {
      id: `${selectedTypeId}${selectedSize}${id}`,
      name,
      imageUrl,
      price: selectedPizzaPrice,
      size: selectedSize,
      type: renderedTypes[selectedTypeId],
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
            {renderedTypes?.map((type, index) => (
              <li
                key={type}
                className={selectedTypeId === index ? "active" : ""}
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
                className={selectedSizeId === index ? "active" : ""}
                onClick={() => onSelectPizzaSize(index)}
              >{`${size} см.`}</li>
            ))}
          </ul>
        </div>
        <div className="pizza-item__bottom">
          <div className="pizza-item__price">{`${selectedPizzaPrice} руб.`}</div>
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
            {items[`${selectedTypeId}${selectedSize}${id}`] ? (
              <i>{items[`${selectedTypeId}${selectedSize}${id}`].length}</i>
            ) : null}
          </Button>
        </div>
      </div>
    </>
  );
});

PizzaItem.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  prices: PropTypes.object,
  sizes: PropTypes.arrayOf(PropTypes.number),
  types: PropTypes.object,
};

PizzaItem.defaultProps = {
  name: "---",
  imageUrl:
    "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
  prices: {},
  sizes: [],
  types: {},
};

export default PizzaItem;
