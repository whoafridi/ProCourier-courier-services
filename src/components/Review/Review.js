import React from 'react'
import {Card, Row} from 'react-bootstrap'

const Review = () => {
    return (
        <div className="container">
            <h2 className="text-center fw-bold mt-5">Our Clients say</h2>
            <h4 className="text-center fw-bold mb-2">Testimonials</h4>
            <Row xs={1} md={3} className="g-4">
              <Card border="light" className="shadow p-3 mb-5 bg-body rounded">
    <Card.Header>Client #1</Card.Header>
    <Card.Body>
      <Card.Text>
      Love the warm and inviting atmosphere at your clinic, with the state of the art equipment, the whole experience was comfortable and personable highly recommended.
        <p>
        <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>
        </p>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card border="light" className="shadow p-3 mb-5 bg-body rounded">
    <Card.Header>Client #2</Card.Header>
    <Card.Body>
      <Card.Text>
      Love the warm and inviting atmosphere at your clinic, with the state of the art equipment, the whole experience was comfortable and personable highly recommended.
      <p>
        <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star-half'></i>
        </p>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card border="light" className="shadow p-3 mb-5 bg-body rounded">
    <Card.Header>Client #3</Card.Header>
    <Card.Body>
      <Card.Text>
      Love the warm and inviting atmosphere at your clinic, with the state of the art equipment, the whole experience was comfortable and personable highly recommended.
      <p>
        <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star-half'></i>
        </p>
      </Card.Text>
    </Card.Body>
  </Card>
  </Row>
        </div>
    )
}

export default Review;