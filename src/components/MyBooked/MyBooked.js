import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth';

const MyBooked = () => {
    const {user} = useAuth();
    const [book, setBook] = useState([]);
    const [single, setSingle] = useState([]);

    useEffect(()=>{
        fetch("https://mighty-inlet-11453.herokuapp.com/booked")
        .then(res =>res.json())
        .then(data => setBook(data))
    },[user]);

    useEffect(()=>{
        const values = book.filter((s) => s.email == user.email)
        setSingle(values);
      },[book]);

    return (
        <div className="container">
            <h1 className="mt-4 h2 text-center fw-bold"> My all booked services</h1>
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
                    single.map(s=>
                    <tbody>
                        <tr>
                        <th scope="row">{s.email}</th>
                        <td>{s.servicename}</td>
                        <td>{s.shipping_address}</td>
                        <td>{s.price}</td>
                        <td><i class='bx bxs-cylinder'></i></td>
                        </tr>
                    </tbody>
                    )
                }
                    </table>
               </div>
            
        </div>
    )
}

export default MyBooked;
