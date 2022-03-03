import React  from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link , useHistory, useLocation} from 'react-router-dom';
import useAuth from '../../hooks/useAuth'

const Login = () => {
     const { signInUsingGoogle} = useAuth();

     const location = useLocation();
     const history = useHistory();
     const redirect_uri = location.state?.from || "/home";

     const handleGooglelogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })
     }

    return (
        <div className="container">
            <h2 className="fw-bold mt-3 mb-3 text-center">Welcome to Login!</h2>
            <div className='row'>
                <div className='col-md-6 col-sm-12'>
                <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control className='rounded-pill'  type="email" placeholder="Enter email"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className='rounded-pill'  type="password" placeholder="Password"/>
            </Form.Group>
            </Form>
            <button onClick={handleGooglelogin} className="btn btn-warning mb-2 rounded-pill">Google Sign In</button>
            <p>Don't have an account? <Link to="/registration" className='text-decoration-none ps-2'>
            <a variant="warning" type="submit">
                Registration
            </a>
            </Link></p>
                </div>
                <div className='col-md-6 col-sm-12'>
                    <img className='img-fluid' src="https://thumbs.dreamstime.com/b/online-registration-sign-up-concept-young-people-signing-login-to-account-user-interface-secure-password-modern-vector-194944767.jpg" alt="name"/>
                </div>
            </div>
           
        </div>
    )
}

export default Login;