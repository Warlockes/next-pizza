import Link from "next/link";

export default function EmptyCart() {
  return (
    <>
      <div class="cart-empty">
        <div class="cart-empty__label">
          <span>Корзина пустая</span>
          <img src="/img/sad.png" alt="Sad face" />
        </div>
        <div class="cart-empty__message">
          <span>Вероятней всего, вы еще не выбрали пиццу.</span>
          <span>
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </span>
        </div>
        <img
          class="cart-empty__image"
          src="/img/cart-image.png"
          alt="Empty cart image"
        />
        <Link href="/">
          <a class="cart-empty__button">Вернуться назад</a>
        </Link>
      </div>
    </>
  );
}
