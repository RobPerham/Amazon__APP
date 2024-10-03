import React from "react";
import "./CheckoutProduct.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import Button from "@mui/material/Button";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <StarRateRoundedIcon />
            ))}
        </div>
        <Button onClick={removeFromBasket}>Remove from Basket</Button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
