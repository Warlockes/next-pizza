import Link from "next/link";
import Button from "./Button";

export default function Header({ cart }) {
  return (
    <>
      <div className="header">
        <div className="header__logo">
          <img src="/img/logo.svg" alt="Pizza logo" />
          <div>
            <h1>NEXT PIZZA</h1>
            <p>пицца со вкусом SSR</p>
          </div>
        </div>
        {!cart && (
          <div className="header__cart">
            <Link href="/cart" passHref>
              <Button className="button_cart" path="/cart">
                <span>520 руб.</span>
                <div className="button__delimiter"></div>
                <img src="/img/cart-icon.svg" alt="Cart icon" />
                <span>3</span>
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
