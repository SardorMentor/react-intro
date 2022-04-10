import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductItem from "../ProductItem";
import "./topProducts.css";

const TopProducts = () => {
  let [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    axios
      .get("https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/products")
      .then((response) => setData(response.data))
      .catch((error) => console.log("error ", error));
  }, []);


  const limitedItems = data.slice(0, 6);

  if (toggle === false) {
    data = limitedItems;
  }

  const items = data.map((item) => (
    <ProductItem
      key={item.id}
      image={item.image}
      name={item.name}
      old_price={item.old_price}
      price={item.price}
      monthly_pay={item.monthly_pay}
      in_stock={item.in_stock}
    />
  ));

  const toggleHandler = () => {
    setToggle(prevState => !prevState)
  }

  return (
    <section className="shopping__top-products container">
      <h2 className="shopping__top-products__title">Выбор покупателей</h2>
      <p
        className="shopping__top-products__toggle"
        onClick={toggleHandler}
      >
        {toggle ? "Смотреть меньше" : "Смотреть все"}
      </p>
      <div className="shopping__top-products__items">{items}</div>
    </section>
  );
};

export default TopProducts;
