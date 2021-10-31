import React, { useEffect, useState } from 'react'
import './Booking.css'
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Form, Button } from 'react-bootstrap'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const {user} = useAuth();
    console.log(user.displayname)
    const {id} = useParams();

    const [service, setService] = useState([]);
    const [single, setSingle] = useState([]);
  
      useEffect(()=>{
          fetch("https://mighty-inlet-11453.herokuapp.com/services/")
          .then(res => res.json())
          .then(data => setService(data));
      },[id])
   
  
      useEffect(()=>{
        const values = service.filter((s) => s._id == id)
        setSingle(values);
      },[service]);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://mighty-inlet-11453.herokuapp.com/booked', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="container">
            <h2 className="text-center mt-3">Booking page</h2>
         <div className="row">
             <div className="col-md-6 mt-5 col-sm-12">
                {
                single.map(s => <div key={s._id}>
                    <h4>{s.servicename} </h4>
                    <img style={{width:"70%"}} src={s.img} alt={s.servicename}/>
                    <p className="mt-5">{s.description}</p>
                    </div>)
                }                 
             </div>
             <div className="col-md-6 mt-5 col-sm-12">
                 {
                     single.map(si =>  
                        <>
                        <div className="book-service">
            <h2 className="text-center">Please Book a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email", { required: true })} placeholder="Email" value={user.email}/>
                <input {...register("servicename", { required: true })} placeholder="Service Name" value={si.servicename}/>
                <input type="number" {...register("price")} placeholder="price" value={si.price}/>
                <input {...register("shipping_address")} placeholder="shipping address" />
                <input type="submit" />
            </form>
        </div>
                <Link to='/services'>
                <Button variant="warning" type="submit" className="ms-2">
                    Back to services
                </Button>
                </Link>
            </>
                     )         
                 }
             </div>
         </div>
            
        </div>
    )
}

export default Booking;