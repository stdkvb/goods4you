import { Helmet } from "react-helmet-async";

import styles from "./CartPage.module.scss";
import { catalogItem } from "../../types";
import CartItem from "../../components/cartItem/CartItem";
import data from "../../../data.json";

const CartPage = () => {
  return (
    <>
      <Helmet>
        <title>My cart | Goods4you</title>
      </Helmet>
      <section
        className={`container ${styles.cart}`}
        aria-labelledby="cartPageTitle"
      >
        <div className={styles.wrapper}>
          <h1 id="cartPageTitle">My cart</h1>
          <ul className={styles.list} aria-label="items in cart">
            {data.cartItems.map((item: catalogItem) => (
              <CartItem key={item.id} data={item} />
            ))}
          </ul>
          <ul className={styles.total} aria-label="cart totals">
            <li className={styles.totalCount}>
              Total count <span>3 items</span>
            </li>
            <li className={styles.discount}>
              Price without discount <span>$700</span>
            </li>
            <li className={styles.totalPrice}>
              Total price <span>$590</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default CartPage;
