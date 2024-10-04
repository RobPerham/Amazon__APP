import React from "react";
import "./Footer.css";
import { Button } from "@mui/material";

const backToTOP = () => {
  window.scrollTo(0, 0);
};

function Footer() {
  return (
    <div className="footer">
      <div className="footer__backToTop">
        <span onClick={backToTOP}>Back to top</span>
      </div>
      <div className="footer__container">
        <div className="footer__menuColumn">
          <h3>Get to Know Us</h3>
          <ol>
            <ul>Careers</ul>
            <ul>Blog</ul>
            <ul>About Amazon</ul>
            <ul>Investor Relations</ul>
            <ul>Amazon Devices</ul>
            <ul>Amazon Tours</ul>
          </ol>
        </div>

        <div className="footer__menuColumn">
          <h3>Make Money with Us</h3>
          <ol>
            <ul>Sell products on Amazon</ul>
            <ul>Sell apps on Amazon</ul>
            <ul>Become an Affiliate</ul>
            <ul>Advertise Your Products</ul>
            <ul>Self-Publish with Us</ul>
            <ul>Host an Amazon Hub</ul>
            <ul>See More Make Money with Us</ul>
          </ol>
        </div>

        <div className="footer__menuColumn">
          <h3>Amazon Payment Method</h3>
          <ol>
            <ul>Amazon Platinum Mastercard</ul>
            <ul>Amazon Classic Mastercard</ul>
            <ul>Amazon Money Store</ul>
            <ul>Gift Cards</ul>
            <ul>Amazon Currency Converter</ul>
            <ul>Payment Methods Help</ul>
            <ul>Shop with Points</ul>
          </ol>
        </div>

        <div className="footer__menuColumn">
          <h3>Let Us Help You</h3>
          <ol>
            <ul>COVID-19 and Amazon</ul>
            <ul>Your Account</ul>
            <ul>Your Orders</ul>
            <ul>Delivery Rates & Policies</ul>
            <ul>Returns & Replacements</ul>
            <ul>Manage Your Content and Devices</ul>
            <ul>Help</ul>
          </ol>
        </div>
      </div>
      <div class="footer__logoContainer">
        <img
          class="footer__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </div>
    </div>
  );
}

export default Footer;
