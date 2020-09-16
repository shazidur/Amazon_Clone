import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { Row, Col, Input, Search } from "antd";

import { useStateValue } from "./StateProvider";

function Header() {
  const { Search } = Input;
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header__search">
        <Search className="header__searchInput" type="text" enterButton />
        {/* <SearchIcon className="header__searchIcon" /> */}
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
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="Header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
