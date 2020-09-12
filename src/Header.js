import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
      />

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__hearchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Shazid</span>
          <span className="Header__optionLineTwo"> Sign in </span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Return</span>
          <span className="Header__optionLineTwo"> & Order </span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="Header__optionLineTwo"> Prime </span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="Header__optionLineTwo header__basketCount"> 0 </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
