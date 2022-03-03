import { Button, InputGroup, FormControl } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container mt-5 footer">
      <div className="row">
        <div className="col-md-4 mt-5 col-sm-12">
          <h3 className="title mt-3">ProCourier</h3>
          <p className="title">
            A Courier services which aims to provide you best services for aroud
            the globe. You all can find and serve better products with us.
          </p>
          <p className="title">12/2, Dhanmondi 3-A, Dhaka-1209</p>
          <p className="title">info@procourier.com</p>
          <p className="title">Hotline: 0980987665</p>
        </div>
        <div className="col-md-4 mt-5 col-sm-12">
          <h2 className="mt-3 fw-bold title">About company</h2>
          <p className="title">Home</p>
          <p className="title">About</p>
          <p className="title">Contact</p>
          <p className="title">Blog</p>
          <p className="title">Curriculum</p>
          <p className="title">FAQs</p>
        </div>
        <div className="col-md-4 mt-5 col-sm-12">
          <h2 className="mt-3 fw-bold title">Our services</h2>
          <p className="title"> Person 2 Person Delivery (P2P)</p>
          <p className="title">Merchant Delivery Service</p>
          <p className="title">Warehouse</p>
          <p className="title">bKash on Delivery (BOD)</p>
          <p className="title">Parcel Pick and Drop Service</p>
          <p className="title">Air Parcel</p>
        </div>
        <h2 className="text-center mt-3 fw-bold title">
          Follow social network
        </h2>
        <div className="icons">
          <h1>
            <i className="bx bxl-facebook-circle"></i>
          </h1>
          <h1>
            <i className="bx bxl-twitter"></i>
          </h1>
          <h1>
            <i className="bx bxl-linkedin"></i>
          </h1>
        </div>
        <hr className="hightlight" />
        <p className="text-center footer-text mb-4 mt-2">
          Copyright © 2021 ProCourier - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
