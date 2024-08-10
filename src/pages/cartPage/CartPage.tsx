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
      <article className={`container ${styles.cart}`}>
        <h1>My cart</h1>
        <ul className={styles.list}>
          {data.cartItems.map((item: catalogItem) => (
            <CartItem key={item.id} data={item} />
          ))}
        </ul>
        <ul className={styles.total}>
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
      </article>
    </>
  );
};

export default CartPage;
