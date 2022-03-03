import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link , useHistory, useLocation} from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


const Registration = () => {
    const { signInUsingGoogle } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home"

    const handleNameChange = e => {
        setName(e.target.value);
      }

    const handleEmailChange = e => {
        setEmail(e.target.value);
      }
    
      const handlePasswordChange = e => {
        setPassword(e.target.value)
      }

        // user registration
    const handleRegistration = e =>{
        console.log(email, password)
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            setUserName();
            //console.log(user);
            history.push(redirect_uri)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }
    // set user name 
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(result => { })
      }
      // google login
      const handleGooglelogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })
     }

    return (
        <div className="container">
            <h2 className="fw-bold mt-3 mb-3 text-center">Welcome to Registration!</h2>
            <div className='row'>
                <div className='col-md-5 col-sm-12'>
                <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter name</Form.Label>
                <Form.Control className='rounded-pill' type="text" placeholder="Enter your name" onBlur={handleNameChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control className='rounded-pill'  type="email" placeholder="Enter email" onBlur={handleEmailChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className='rounded-pill'  type="password" placeholder="Password" onBlur={handlePasswordChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleRegistration} className='rounded-pill'>
                Registration
            </Button>
            </Form>
            <button onClick={handleGooglelogin} className="btn btn-warning mt-2 mb-3 rounded-pill">Google Sign In</button>
            <p>Already have an account? <Link to="/login" className='text-decoration-none ps-2'>
            <a className='text-decoration-none' variant="warning" type="submit">
                Login
            </a>
            </Link></p>
                </div>
                <div className='col-md-7 col-sm-12'>
                    <img className='img-fluid' src="https://thumbs.dreamstime.com/b/online-registration-sign-up-concept-young-people-signing-login-to-account-user-interface-secure-password-modern-vector-194944767.jpg" alt="name"/>
                </div>
            </div>
        </div>
    )
}

export default Registration;