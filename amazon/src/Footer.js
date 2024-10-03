import React from "react";
import "./Footer.css";
import { Button } from "@mui/material";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__menu">
        <Button>Back to top</Button>

        <div className="footer__menuColumn">
          <h3>Get to Know Us</h3>
          <p>Careers</p>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>Investor Relations</p>
          <p>Amazon Devices</p>
        </div>

        <div className="footer__menuColumn">
          <h3>Make Money with Us</h3>
          <p>Sell products on Amazon</p>
          <p>Sell apps on Amazon</p>
          <p>Become an Affiliate</p>
          <p>Advertise Your Products</p>
          <p>Self-Publish with Us</p>
          <p>Host an Amazon Hub</p>
        </div>

        <div className="footer__menuColumn">
          <h3>Amazon Payment Method</h3>
          <p>Amazon Business Card</p>
          <p>Shop with Points</p>
          <p>Reload Your Balance</p>
          <p>Amazon Currency Converter</p>
        </div>

        <div className="footer__menuColumn">
          <h3>Let Us Help You</h3>
          <p>Amazon and COVID-19</p>

          <p>Your Account</p>
          <p>Your Orders</p>
          <p>Shipping Rates & Policies</p>
          <p>Returns & Replacements</p>
          <p>Manage Your Content and Devices</p>
          <p>Amazon Assistant</p>
          <p>Help</p>
        </div>

        <img
          className="footer__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </div>
    </div>
  );
}

export default Footer;
