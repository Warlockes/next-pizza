import { useRouter } from "next/router";
import Link from "next/link";

import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { Button } from "./";

function Header() {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);
  const router = useRouter();
  return (
    <>
      <div className="header">
        <Link href="/" passHref>
          <div className="header__logo">
            <img src="/img/logo.svg" alt="Pizza logo" />
            <div>
              <h1>NEXT PIZZA</h1>
              <p>пицца со вкусом SSR</p>
            </div>
          </div>
        </Link>
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

Header.propTypes = {
  cart: PropTypes.bool,
};

export default Header;
