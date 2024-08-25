import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useSelector } from "react-redux";

import styles from "./Header.module.scss";
import { cartIcon } from "../../assets/icons.tsx";
import { CartState, UserState } from "../../types.ts";
import { useAppDispatch } from "../../store/store";
import { fetchCart } from "../../store/slices/cartSlice";

const Header = () => {
  let location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const cartTotalQuantity = useSelector(
    (state: { cartSlice: CartState }) => state.cartSlice.totalQuantity
  );

  const loggedIn = useSelector(
    (state: { userSlice: UserState }) => state.userSlice.loggedIn
  );

  const user = useSelector(
    (state: { userSlice: UserState }) => state.userSlice
  );

  return (
    <header className={`container ${styles.header}`} aria-label="header">
      <div className={styles.wrapper}>
        <NavLink to="/" aria-label="go to homepage" className={styles.logo}>
          Goods4you
        </NavLink>
        {loggedIn && (
          <nav className={styles.nav} aria-label="main navigation">
            <HashLink
              className="link"
              to="/#catalog"
              aria-label="go to catalog section"
              aria-current={location.hash === "#catalog" ? "page" : undefined}
            >
              Catalog
            </HashLink>
            <HashLink
              className="link"
              to="/#faq"
              aria-label="go to FAQ section"
              aria-current={location.hash === "#faq" ? "page" : undefined}
            >
              FAQ
            </HashLink>
            <NavLink
              className={`link ${styles.cart}`}
              to="/cart"
              aria-label="go to cart"
              aria-current={location.pathname === "/cart" ? "page" : undefined}
            >
              Cart
              {cartIcon}
              {cartTotalQuantity > 0 && (
                <span
                  className={styles.cartCounter}
                  aria-label="number of items in cart"
                >
                  {cartTotalQuantity}
                </span>
              )}
            </NavLink>
            <NavLink
              className="link disabled"
              to="#"
              aria-label="user profile"
              aria-disabled="true"
            >
              {`${user.firstName} ${user.lastName}`}
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
