import React from "react";
import Styles from "./subtotal.module.css";

function Subtotal(props) {
  return (
    <div className={Styles.Subtotal}>
      <button>proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
