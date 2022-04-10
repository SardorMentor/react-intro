import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductItem from "../ProductItem";
import "./newProducts.css";

const NewProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/products")
      .then((response) => setData(response.data))
      .catch((error) => console.log("error ", error));
  }, []);

  const newItems = data.filter((item) => item.status === "new");

  const items = newItems.map((item) => (
    <ProductItem
      key={item.id}
      image={item.image}
      name={item.name}
      old_price={item.old_price}
      price={item.price}
      monthly_pay={item.monthly_pay}
    />
  ));

  return (
    <section className="shopping__new-products container">
      <h2 className="shopping__new-products__title">Новинки</h2>
      <div className="shopping__new-products__items">{items}</div>
    </section>
  );
};

export default NewProducts;
