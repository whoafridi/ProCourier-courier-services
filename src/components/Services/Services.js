import React from "react";
import { useEffect, useState } from "react";
import { Row, Button, Spinner } from "react-bootstrap";
import Detail from "../Detail/Detail";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://mighty-inlet-11453.herokuapp.com/services/")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container">
      <h2 className="mt-3 fw-bold text-center mb-3">Our All Services</h2>
      {services.length === 0 ? (
        <div className="row mt-5 mb-5">
          <div className="col text-center">
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden ">Loading...from api</span>
            </Button>{" "}
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...from api
            </Button>
          </div>
        </div>
      ) : (
        <Row xs={1} md={3} className="g-4">
          {services.map((service) => (
            <Detail key={service.id} service={service}></Detail>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Services;
