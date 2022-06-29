import Link from "next/link";
import React from "react";
import { selectCartData } from "../redux/cart/selectors";
import { clearCart } from "../redux/cart/slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Button } from "./Button";
import { CartPizzaItem } from "./CartPizzaItem";
import { Confirm } from "./Confirm";
import { EmptyCart } from "./EmptyCart";
import { BackIcon } from "./Icons/BackIcon";
import { CartIcon } from "./Icons/CartIcon";
import { ClearIcon } from "./Icons/ClearIcon";
import { Modal } from "./Modal";

export const Cart: React.FC = () => {
  const [visibleOrderModal, setVisibleOrderModal] =
    React.useState<boolean>(false);
  const [visibleClearCartModal, setVisibleClearCartModal] =
    React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { addedItems, totalPrice } = useAppSelector(selectCartData);

  const totalCount = addedItems.reduce((accum, item) => item.count + accum, 0);

  const handleOpenClearCartModal = () => {
    setVisibleClearCartModal(true);
  };

  const handleCloseClearCartModal = () => {
    setVisibleClearCartModal(false);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    handleCloseClearCartModal();
  };

  const handleOrder = () => {
    setVisibleOrderModal(true);
  };

  const handleCloseOrderModal = () => {
    setVisibleOrderModal(false);
  };

  return (
    <>
      <div className="cart-container">
        {totalCount ? (
          <div className="cart">
            <div className="cart__top">
              <div className="cart-header">
                <div className="cart-header__label">
                  <CartIcon />
                  <span>Корзина</span>
                  <div className="cart-header__hider"></div>
                </div>
                <div
                  onClick={handleOpenClearCartModal}
                  className="cart-header__cleaner"
                >
                  <ClearIcon />
                  <span>Очистить корзину</span>
                </div>
              </div>
            </div>
            <div className="cart__items">
              {addedItems.map((item) => (
                <CartPizzaItem item={item} />
              ))}
            </div>
            <div className="cart__total">
              <div className="total__amount">
                <span>Всего пицц: </span>
                <b>{totalCount} шт.</b>
              </div>
              <div className="total__sum">
                <span>Сумма заказа: </span>
                <b>{totalPrice} руб.</b>
              </div>
            </div>
            <div className="cart__button-row">
              <Link href="/">
                <Button className="button_back">
                  <BackIcon />
                  <span>Вернуться назад</span>
                </Button>
              </Link>
              <Button onClick={handleOrder} className="button_pay">
                <span>Оплатить сейчас</span>
              </Button>
            </div>
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
      <Modal visible={visibleOrderModal}>
        <p className="content__label">
          Поздравляю! Вы заказали пиццу, но мы Вам ее не привезем, потому что у
          нас нет бэкенда...
        </p>
        <Button
          className="content__button button_modal"
          onClick={handleCloseOrderModal}
        >
          <span>Отлично!</span>
        </Button>
      </Modal>
      <Confirm
        visible={visibleClearCartModal}
        text={"Вы действительно хотите очистить корзину?"}
        onConfirm={handleClearCart}
        onCancel={handleCloseClearCartModal}
      />
    </>
  );
};
