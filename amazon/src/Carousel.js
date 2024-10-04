import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

function DarkVariantExample() {
  <Carousel className="carousel" data-bs-theme="dark" interval={3000}>
    {" "}
    {/* Auto-play with 3 seconds interval */}
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://m.media-amazon.com/images/I/711910caIXL._SX3000_.jpg"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://m.media-amazon.com/images/I/71ILfTBZUcL._SX3000_.jpg"
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>;

  return (
    <div>
      <h2>Dark Variant Example</h2>
      <p>
        This example demonstrates how to use the dark variant of the Carousel
        component.
      </p>
      <p>
        The dark variant is applied by setting the <code>data-bs-theme</code>{" "}
        attribute to <code>dark</code>.
      </p>
    </div>
  );
}

export default DarkVariantExample;
