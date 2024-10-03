import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import Button from "@mui/material/Button";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className="Subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"£"}
      />
      <Button>Proceed to Checkout</Button>
    </div>
  );
}

export default Subtotal;
