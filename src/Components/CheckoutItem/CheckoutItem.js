import React from "react";
import "./Checkout.scss";

const CheckoutItem = ({ item: { name, imageUrl, price, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button">&#10005;</div>
  </div>
);

//!image container: easier to control the size, restraining the image without affecting other sections
//*UTF 8 "icons"
export default CheckoutItem;
