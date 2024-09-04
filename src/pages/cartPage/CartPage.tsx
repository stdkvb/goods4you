import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";

import styles from "./CartPage.module.scss";
import { CartState, Product } from "../../types";
import CartItem from "../../components/cartItem/CartItem";

const CartPage = () => {
  const cart = useSelector((state: { cart: CartState }) => state.cart);

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
          <div className={styles.content}>
            {cart.status == "pending" && (
              <span className={styles.message}>Loading...</span>
            )}
            {cart.status == "failed" && (
              <span className={styles.message}>
                Error occurred: {cart.error}
              </span>
            )}
            {cart.status == "succeeded" && cart.totalQuantity !== 0 ? (
              <>
                <ul className={styles.list} aria-label="items in cart">
                  {cart.products.map((item: Product) => (
                    <CartItem key={item.id} data={item} />
                  ))}
                </ul>
                <ul className={styles.total} aria-label="cart totals">
                  <li className={styles.totalCount}>
                    Total count{" "}
                    <span>
                      {cart.totalQuantity} item
                      {cart.totalQuantity > 1 ? "s" : ""}
                    </span>
                  </li>
                  <li className={styles.discount}>
                    Price without discount <span>${cart.total}</span>
                  </li>
                  <li className={styles.totalPrice}>
                    Total price <span>${cart.discountedTotal}</span>
                  </li>
                </ul>
              </>
            ) : cart.status == "succeeded" && cart.totalQuantity === 0 ? (
              <span className={styles.message}>No items</span>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
