import { useRouter } from "next/router";
import Link from "next/link";

import { Button } from "./Button";
import { Logo } from "./Logo";
import { withLink } from "../hoc/withLink";
import { Routes } from "../constants";
import { useAppSelector } from "../redux/hooks";
import { selectCartData } from "../redux/cart/selectors";

export const Header = () => {
  const { addedItems, totalPrice } = useAppSelector(selectCartData);
  const { pathname } = useRouter();
  const LogoWithHomeLink = withLink(Logo, Routes.Home); //переделать

  const totalCount = addedItems.reduce((accum, item) => item.count + accum, 0);

  return (
    <div className="header">
      {pathname === Routes.Cart ? <LogoWithHomeLink /> : <Logo />}
      {pathname !== Routes.Cart && (
        <div className="header__cart">
          <Link href={Routes.Cart} passHref>
            <Button className="button_cart">
              <span>{`${totalPrice} руб.`}</span>
              <div className="button__delimiter" />
              <img src="/img/cart-icon.svg" alt="Cart icon" />
              <span>{totalCount}</span>
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};
