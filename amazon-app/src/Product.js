import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import Button from "@mui/material/Button";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarRoundedIcon key={i} />
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <Button onClick={addToBasket}>Add to Basket</Button>
    </div>
  );
}

export default Product;
