import React from "react";
import { Link } from "react-router-dom";

//css
import Styles from "./header.module.css";

//icons
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header(props) {
  return (
    <nav className={Styles.header}>
      <img
        className={Styles.header__logo}
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo"
      />
      <div className={Styles.header__search}>
        <input type="text" className={Styles.header__searchInput} />
        <SearchIcon className={Styles.header__searchIcon} />
      </div>
      <div className={Styles.header__nav}>
        {/* 1st link */}
        <Link to="/" className={Styles.header__link}>
          <div className={Styles.header__option}>
            <span className={Styles.header__optionOne}>Hello,User</span>
            <span className={Styles.header__optionTwo}>
              Sign In or Sign Out
            </span>
          </div>
        </Link>
        {/* 2nd link */}
        <Link to="/" className={Styles.header__link}>
          <div className={Styles.header__option}>
            <span className={Styles.header__optionOne}>Returns</span>
            <span className={Styles.header__optionTwo}>& Orders</span>
          </div>
        </Link>
        {/* 3rd Link */}
        <Link to="/" className={Styles.header__link}>
          <div className={Styles.header__option}>
            <span className={Styles.header__optionOne}>You</span>
            <span className={Styles.header__optionTwo}>Prime</span>
          </div>
        </Link>
        <Link to="/" className={Styles.header__link}>
          <div className={Styles.header__optionBasket}>
            <ShoppingBasketIcon />
            <span
              className={(Styles.header__optionTwo, Styles.header__basketCount)}
            >
              2
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
