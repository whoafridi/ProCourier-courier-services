import React, {useEffect, useState} from "react";
import { Button, Spinner, Row } from "react-bootstrap";
import CustomerReview from "../CustomerReview/CustomerReview";

const Review = () => {
  const [review, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://arcane-spire-40682.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="container">
      <h2 className="text-center fw-bold mt-5">Our Clients say</h2>
      <h4 className="text-center fw-bold mb-2">Testimonials</h4>
      {review.length == 0 ? (
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
          {review.map((r) => (
            <CustomerReview r={r} key={r._id}></CustomerReview>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Review;