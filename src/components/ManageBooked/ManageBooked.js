import React, { useEffect, useState } from 'react';
import {Button} from 'react-bootstrap';

const ManageBooked = () => {
    const [book, setBook] = useState([]);

    useEffect(()=>{
        fetch("https://api-pro-courier.vercel.app/booked")
        .then(res =>res.json())
        .then(data => setBook(data))
    },[]);

    return (
        <div className="container">
            <h1 className="mt-4 h2 text-center fw-bold"> All booked services</h1>
            <div className="d-flex justify-content-center">
               <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Email</th>
                    <th scope="col">Service Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Price</th>
                    </tr>
                </thead>
            {
                 book.map(s => 
                <tbody>
                    <tr>
                    <th scope="row">{s.email}</th>
                    <td>{s.servicename}</td>
                    <td>{s.shipping_address}</td>
                    <td>{s.price}</td>
                    <td><Button variant="dark">Delete</Button> only admin can delete</td>
                    </tr>
                </tbody>
                )
            }
                </table>
           </div>
        </div>
    )
}

export default ManageBooked;
