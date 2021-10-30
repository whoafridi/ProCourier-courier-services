import React  from 'react'
import { Button } from 'react-bootstrap';
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
            <h2 className="fw-bold mt-3 mb-3">Welcome to Login!</h2>
            <button onClick={handleGooglelogin} className="btn btn-warning">Google Sign In</button>
            <h4>Don't have an account? <Link to="/registration">
            <Button variant="warning" type="submit">
                Registration
            </Button>
            </Link></h4>
        </div>
    )
}

export default Login;