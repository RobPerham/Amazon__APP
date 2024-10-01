import React from "react";
import "./CheckoutProduct.css";
import { Button } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  //remove from basket function
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  // display the product in the checkout page

  return (
    <div className="checkoutProduct ">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarRoundedIcon key={i} />
            ))}
        </div>
        <Button onClick={removeFromBasket}>Remove from Basket</Button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
