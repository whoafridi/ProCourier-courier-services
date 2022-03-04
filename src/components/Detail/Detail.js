import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Detail = ({ service }) => {
  const { _id, img, servicename, description, price } = service;
  return (
    <Col>
      <Card className="border rounded-3 shadow p-3 mb-5 bg-body rounded h-80">
        <Link to={`/service/${_id}`}>
          <Card.Img variant="top" src={img} rounded />
        </Link>
        <Card.Body>
          <Link
            to={`/service/${_id}`}
            className="text-decoration-none text-dark"
          >
            <Card.Title className="fw-bold">{servicename}</Card.Title>
            <Card.Text>{description.slice(0, 50)}</Card.Text>
          </Link>
          <Card.Text className="fw-bold">Price: {price}</Card.Text>
          <Link to={`/service/${_id}`}>
            <Button variant="warning" className="rounded-pill">
              More info{" "}
              <span>
                <i className="bx bx-right-arrow-alt"></i>
              </span>
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Detail;
