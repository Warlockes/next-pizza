import React from "react";
import Link from "next/link";

export const EmptyCart: React.FC = () => {
  return (
    <div className="cart-empty">
      <div className="cart-empty__label">
        <span>Корзина пуста</span>
        <img src="/img/sad.png" alt="Sad face" />
      </div>
      <div className="cart-empty__message">
        <span>Вероятней всего, вы еще не выбрали пиццу.</span>
        <span>
          Для того, чтобы заказать пиццу, перейдите на главную страницу.
        </span>
      </div>
      <img
        className="cart-empty__image"
        src="/img/cart-image.png"
        alt="Empty cart image"
      />
      <Link href="/">
        <a className="cart-empty__button">Вернуться назад</a>
      </Link>
    </div>
  );
};
