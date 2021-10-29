import React from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
const Track = () => {
    return (
        <div className="container md-4 w-50 mt-4">
            <h3 className="text-center fw-bold">Track your percel</h3>
            <InputGroup className="mb-3 shadow-lg p-3 mb-5 bg-body rounded me-2">
            <FormControl className="rounded"
                
                aria-label="Type your Track ID"
                aria-describedby="basic-addon1"
                placeholder="Type your Track ID"
            />
                <Button variant="warning" id="button-addon1" className="ms-2 rounded">
                <i className='text-center bx bxs-check-circle'>Track percel</i>
                </Button>
                <Button variant="success" id="button-addon1" className="ms-2 rounded">
                    Booking percel
                </Button>
            </InputGroup>
        </div>
    )
}

export default Track
