import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DetailService = ({s}) => {
    const { _id ,img, description,servicename, price} = s;
    
    return (
        <>
            <div className="row">
                <div className="col-lg-5 col-sm-12">
                    <h2 className="text-center fw-bold">{servicename}</h2>
                    <img style={{width:"90%"}} src={img} alt={servicename}/>
                </div>
                <div className="col-lg-7 col-sm-12">
                    <p className="mt-5">{description}</p>
                    <h6 className='fw-bold'>Price : {price}</h6>
                </div>
            </div>
                <Link to="/services">
                    <Button variant="warning" type="submit" className="mt-2 rounded-pill">
                        Back to services 
                    </Button>
                </Link>
                <Link to={`/booking/${_id}`}>
                    <Button variant="primary" type="submit" className="mt-2 ms-2 rounded-pill">Make a booking</Button>
                </Link>
                
        </>
    )
}

export default DetailService;
