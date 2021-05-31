import React from "react";
import Product from "../Product/Product";
import Styles from "./home.module.css";

function Home(props) {
  return (
    <div className={Styles.home}>
      <img
        className={Styles.home__image}
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        alt="home Image"
      />
      <div className={Styles.home__row}>
        <Product
          id="1"
          title="NETGEAR Wi-Fi Range Extender EX3700"
          price={45.56}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41ffko0T3kL.jpg"
        />
        <Product
          id="2"
          title="NETGEAR Wi-Fi Range Extender EX3700"
          price={45.56}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41ffko0T3kL.jpg"
        />
        <Product
          id="3"
          title="NETGEAR Wi-Fi Range Extender EX3700"
          price={45.56}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41ffko0T3kL.jpg"
        />
      </div>
      <div className={Styles.home__row}>
        <Product
          id="4"
          title="NETGEAR Wi-Fi Range Extender EX3700"
          price={45.56}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41ffko0T3kL.jpg"
        />
        <Product
          id="5"
          title="NETGEAR Wi-Fi Range Extender EX3700"
          price={45.56}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41ffko0T3kL.jpg"
        />
        <Product
          id="6"
          title="NETGEAR Wi-Fi Range Extender EX3700"
          price={45.56}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41ffko0T3kL.jpg"
        />
        <Product
          id="7"
          title="NETGEAR Wi-Fi Range Extender EX3700"
          price={45.56}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41ffko0T3kL.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
