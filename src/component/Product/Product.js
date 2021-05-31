import React from "react";
import { useStateValue } from "../../Context/StateProvider";
import Styles from "./product.module.css";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("basket", basket);
  const addToTheBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className={Styles.product}>
      <div className={Styles.product_info}>
        <p>{title}</p>
        <p className={Styles.product__price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={Styles.product__rating}>
          {Array(rating)
            .fill()
            .map((_) => (
              <p>*</p>
            ))}
        </div>
        <img src={image} alt="" />
        <button onClick={addToTheBasket}>Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
