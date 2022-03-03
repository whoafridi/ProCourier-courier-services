import React from 'react'
import './Faq.css';
import { Accordion, Button, InputGroup, FormControl} from 'react-bootstrap';

const Faq = () => {
    return (
        <>
        <h2 className="fw-bold text-center mt-5">Frequently Asked Questions ?</h2>
        <div className="container mb-6 mt-5">
           <div className='row'>
           <div className="col-md-6 col-sm-12">
            <Accordion defaultActiveKey="0" flush className="according-item">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Why choose us?</Accordion.Header>
                <Accordion.Body>
                We are the largest brand in bangladesh to provide a better delivery.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>How we works?</Accordion.Header>
                <Accordion.Body>
                Select one of our services then submit for that we will confirm you for more updates.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>What do you get from us?</Accordion.Header>
                <Accordion.Body>
                All types of security that you wanted from us.
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            </div>
            <div className="col-md-6 col-sm-12">
                <img style={{width:"100%"}} src="https://assets.materialup.com/uploads/d81111b5-b028-4c28-afc8-7d26df4cbdae/preview.jpg" alt="courier-service" />
           </div>
           </div>
        </div>
        <div style={{height:"450px;"}}
         class="container faq mt-5 d-flex justify-content-center align-items-center rounded-3">
         <div>
             <h1 className='mt-5 faq-text'>LET'S STAY IN TOUCH</h1>
             <p className='faq-text text-center'>Get updates on sales, specials and more</p>
             <InputGroup className='mb-5'>
            <FormControl className="rounded-pill"
                placeholder="Your email address"
                aria-label="Your email"
                aria-describedby="basic-addon2"
            />
            <Button variant="secondary" id="button-addon2" className="rounded-pill ms-2">
                Subscribe
            </Button>
        </InputGroup>
         </div>
     </div>
        </>
    )
}

export default Faq;
