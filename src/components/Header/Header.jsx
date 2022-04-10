import React from "react";

import "./header.css";
import logo from "../../Assets/Image/MaxProff.svg";
import search from "../../Assets/Image/search-icon.svg";
import favorites from "../../Assets/Image/favorites-icon.svg";
import compare from "../../Assets/Image/compare-icon.svg";
import basket from "../../Assets/Image/basket-icon.svg";
import login from "../../Assets/Image/login-icon.svg";

const Header = () => {
  return (
    <header className="shopping__header">
      <div className="shopping__header-top">
        <div className="container">
          <a href="#" className="shopping__header-logo">
            <img src={logo} alt="logo" />
          </a>
          <div className="shopping__search">
            <input type="text" placeholder="Искать товары" />
            <button>
              <img src={search} />
            </button>
          </div>
          <ul className="shopping__header-items">
            <li>
              <a href="#">
                <img src={favorites} />
                <span>Избранное</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={compare} />
                <span>Сравнение</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={basket} />
                <span>Корзина</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={login} />
                <span>Войти</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav className="shopping__header-links">
        <ul className="container">
          <li>
            <a href="#">Акции и скидки</a>
            </li>
          <li>
            <a href="#">Ноутбуки и компьютеры</a>
            </li>
          <li>
            <a href="#">Смартфоны и гаджеты</a>
            </li>
          <li>
            <a href="#">Телевизоры и аудио</a>
            </li>
          <li>
            <a href="#">Красота и здоровье</a>
            </li>
          <li>
            <a href="#">Техника для дома</a>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
