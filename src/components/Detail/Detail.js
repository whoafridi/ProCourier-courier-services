import React from 'react'
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Detail = ({service}) => {
    const {_id, img, servicename, description, price} = service;
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={img} rounded/>
          <Card.Body>
            <Card.Title className="fw-bold">{servicename}</Card.Title>
            <Card.Text>
              {description.slice(0,150)}
            </Card.Text>  
            <Card.Text>
              Price: {price}
            </Card.Text>  
            <Link to={`/service/${_id}`}>
            <Button variant="warning">More info <span><i className='bx bx-right-arrow-alt'></i></span></Button>
            </Link>          
          </Card.Body>
        </Card>
      </Col>
    )
}

export default Detail;