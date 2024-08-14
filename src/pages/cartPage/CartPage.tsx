import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./CartPage.module.scss";
import { CartState, Product } from "../../types";
import CartItem from "../../components/cartItem/CartItem";
import { useAppDispatch } from "../../store/store";
import { fetchCart } from "../../store/slices/cartSlice";

const CartPage = () => {
  const dispatch = useAppDispatch();
  const cart = useSelector((state: { cart: CartState }) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

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
          {cart.status == "pending" && <span>Loading...</span>}
          {cart.status == "failed" && <span>Error occured: {cart.error}</span>}
          {cart.status == "succeeded" && (
            <>
              <h1 id="cartPageTitle">My cart</h1>
              <ul className={styles.list} aria-label="items in cart">
                {cart.products.map((item: Product) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
              <ul className={styles.total} aria-label="cart totals">
                <li className={styles.totalCount}>
                  Total count{" "}
                  <span>
                    {cart.totalQuantity} item{cart.totalQuantity > 1 ? "s" : ""}
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
          )}
        </div>
      </section>
    </>
  );
};

export default CartPage;
