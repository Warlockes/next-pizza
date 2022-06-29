import React from "react";
import { decrementItem, incrementItem, removeItem } from "../redux/cart/slice";
import { AddedItem } from "../redux/cart/types";
import { useAppDispatch } from "../redux/hooks";
import { Confirm } from "./Confirm";
import { DecrementIcon } from "./Icons/DecrementIcon";
import { DeleteIcon } from "./Icons/DeleteIcon";
import { IncrementIcon } from "./Icons/IncrementIcon";

interface CartPizzaItemProps {
  item: AddedItem;
}

export const CartPizzaItem: React.FC<CartPizzaItemProps> = ({ item }) => {
  const [visibleModal, setVisibleModal] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { pizza, count, id } = item;
  const { imageUrl, name, type, size, price } = pizza;

  const handleDecrementPizza = () => {
    dispatch(decrementItem(id));
  };

  const handleIncrementPizza = () => {
    dispatch(incrementItem(id));
  };

  const handleOpenDeleteModal = () => {
    setVisibleModal(true);
  };

  const handleCloseDeleteModal = () => {
    setVisibleModal(false);
  };

  const handleDeletePizza = () => {
    dispatch(removeItem(id));
    handleCloseDeleteModal();
  };

  return (
    <>
      <div className="cart-item">
        <div className="cart-item__description">
          <img src={imageUrl} alt="Pizza" />
          <div>
            <h3>{name}</h3>
            <span>
              {type} тесто, {size} см.
            </span>
          </div>
        </div>
        <div className="cart-item__counter">
          <a
            onClick={handleDecrementPizza}
            className={count === 1 ? "disabled" : ""}
          >
            <DecrementIcon />
          </a>
          <span>{count}</span>
          <a onClick={handleIncrementPizza}>
            <IncrementIcon />
          </a>
        </div>
        <span className="cart-item__price">{price * count} руб.</span>
        <a className="cart-item__delete" onClick={handleOpenDeleteModal}>
          <DeleteIcon />
        </a>
      </div>
      <Confirm
        visible={visibleModal}
        text={"Вы действительно хотите удалить пиццу?"}
        onConfirm={handleDeletePizza}
        onCancel={handleCloseDeleteModal}
      />
    </>
  );
};
