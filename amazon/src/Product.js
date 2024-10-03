import React from "react";
import "./Product.css";
import Button from "@mui/material/Button";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";

function Product() {
  return (
    <div className="project">
      <div className="product__info">
        <p>The Lean Startup:</p>
        <p className="product__price">
          <small>£</small>
          <strong>19.90</strong>
        </p>
        <div className="product__rating">
          <StarBorderRoundedIcon />
          <StarBorderRoundedIcon />
          <StarBorderRoundedIcon />
          <StarBorderRoundedIcon />
        </div>
      </div>

      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        alt=""
      />

      <Button className="product__Button">Add to Basket</Button>
    </div>
  );
}

export default Product;
