import React, { useEffect, useState } from 'react'
import { Row, Button, Spinner } from 'react-bootstrap';
import Analysis from '../Analysis/Analysis'
import Details from '../Details/Details'
import Faq from '../Faq/Faq'
import Interest from '../Interest/Interest'
import Review from '../Review/Review'
import Slider from '../Slider/Slider'
import Track from '../Track/Track'

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch("https://mighty-inlet-11453.herokuapp.com/services/")
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div>
            <Slider/>
            <Track/>
            {/* load data from server */}
            { services.length < 0 ?
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
                </Button>{' '}
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
                    :
                <div className="container">
                    <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service => <Details key={service._id} service={service}></Details>)
                    }
                    </Row>
                </div>
            }

            <Analysis/>
            <Review/>
            <Interest/>
            <Faq/>
        </div>
    )
}

export default Home
