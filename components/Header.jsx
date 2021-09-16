import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";

import { Button } from "./";

function Header() {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);
  const router = useRouter();
  return (
    <>
      <div className="header">
        {router.pathname === "/cart" ? (
          <Link href="/" passHref>
            <div className="header__logo">
              <img src="/img/logo.png" alt="Pizza logo" />
              <div>
                <h1>NEXT PIZZA</h1>
                <p>пицца со вкусом SSR</p>
              </div>
            </div>
          </Link>
        ) : (
          <div className="header__logo">
            <img src="/img/logo.png" alt="Pizza logo" />
            <div>
              <h1>NEXT PIZZA</h1>
              <p>пицца со вкусом SSR</p>
            </div>
          </div>
        )}

        {router.pathname !== "/cart" && (
          <div className="header__cart">
            <Link href="/cart" passHref>
              <Button className="button_cart" path="/cart">
                <span>{`${totalPrice} руб.`}</span>
                <div className="button__delimiter"></div>
                <img src="/img/cart-icon.svg" alt="Cart icon" />
                <span>{totalCount}</span>
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
