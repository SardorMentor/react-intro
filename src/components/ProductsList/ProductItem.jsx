import React from "react";

import "./productItem.css";
import star from "../../Assets/Image/star-icon.svg";
import compare from "../../Assets/Image/compare-icon.svg";
import favorite from "../../Assets/Image/favorites-icon.svg";

const ProductItem = (props) => {

  return (
    <div className="product-item">
      <div className="product-item__image">
        <img src={props.image} />
      </div>
      <div className="product-item__body">
        <h3 className="product-item__body-title">{props.name}</h3>
        <div className="product-item__body-review">
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
        </div>
        {props.old_price ? (
          <p className="product-item__body-old-price">
            {"$" + props.old_price}
          </p>
        ) : (
          <p className="product-item__body-old-price_null"></p>
        )}
        <p className="product-item__body-price">{"$" + props.price}</p>
        {props.monthly_pay ? (
          <p className="product-item__body-monthly-pay">{`От $${props.monthly_pay}/12 мес`}</p>
        ) : (
          <p className="product-item__body-monthly-pay_null"></p>
        )}
      </div>
      <div className="product-item__footer">
        <button style={{backgroundColor: `${props.in_stock != 0 ? "#4D96FF" : "#CCC"}`}} className="product-item__footer-add">В корзину</button>
        <a href="#">
          <img src={compare} />
        </a>
        <a href="#">
          <img src={favorite} />
        </a>
      </div>
    </div>
  );
};

export default ProductItem;
