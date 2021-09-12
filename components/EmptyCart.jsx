import Link from "next/link";

function EmptyCart() {
  return (
    <>
      <div className="cart-empty">
        <div className="cart-empty__label">
          <span>Корзина пустая</span>
          <img src="/img/sad.png" alt="Sad face" />
        </div>
        <div className="cart-empty__message">
          <span>Вероятней всего, вы еще не выбрали пиццу.</span>
          <span>
            Для того, чтобы заказать пиццу, перейди на главную страницу.
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
    </>
  );
}

export default EmptyCart;
