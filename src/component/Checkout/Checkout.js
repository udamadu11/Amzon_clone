import React from "react";
import Subtotal from "../Subtotal/Subtotal";
import Styles from "./checkout.module.css";
function Checkout(props) {
  return (
    <div className={Styles.checkout}>
      <div className={Styles.checkout__left}>
        <div>
          <h2 className={Styles.checkout__title}>
            Your shopping Backet is empty
          </h2>
          <p>You have no items in your basket. Buy one.</p>
        </div>
      </div>
      <div className={Styles.checkout__right}>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
