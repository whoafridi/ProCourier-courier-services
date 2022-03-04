import React from "react";
import "./Analysis.css";

const Analysis = () => {
  return (
    <div className="container mt-5 analysis">
      <div className="row">
        <div className="col-md-3 col-sm-12 mt-3 mb-3">
          <h3 className="text-color h1 text-center fw-bold">4+ </h3>
          <h4 className="text-color text-center">Millions percel deliverd</h4>
        </div>
        <div className="col-md-3 col-sm-12 mt-3 mb-3">
          <h3 className="text-color h1 text-center fw-bold">32</h3>
          <h4 className="text-color text-center">District coverage</h4>
        </div>
        <div className="col-md-3 col-sm-12 mt-3 mb-3">
          <h3 className="text-color h1 text-center fw-bold">1000+</h3>
          <h4 className="text-color text-center"> Delivery agents</h4>
        </div>
        <div className="col-md-3 col-sm-12 mt-3 mb-3">
          <h3 className="text-color h1 text-center fw-bold">25000+ </h3>
          <h4 className="text-color text-center">Registered merchants</h4>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
