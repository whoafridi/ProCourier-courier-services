import React, { useState } from "react";
import { Button, Form, InputGroup} from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const auth = getAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleLogin = (e) => {

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        history.push(redirect_uri);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleGooglelogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div className="container">
      <h2 className="fw-bold mt-3 mb-3 text-center">Welcome to Login!</h2>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <Form noValidate validated={validated}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  className="rounded-pill"
                  type="email"
                  placeholder="Enter email"
                  onBlur={handleEmailChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter an email.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <InputGroup hasValidation>
              <Form.Control
                required
                className="rounded-pill"
                type="password"
                placeholder="Password"
                onBlur={handlePasswordChange}
              />
              <Form.Control.Feedback type="invalid">
                  Please enter password.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="btn btn-primary mb-2 rounded-pill"
              onClick={handleLogin}
            >
              Login
            </Button>
          </Form>
          <button
            onClick={handleGooglelogin}
            className="btn btn-warning mb-2 rounded-pill"
          >
            Google Sign In
          </button>
          <p>
            Don't have an account?{" "}
            <Link to="/registration" className="text-decoration-none ps-2">
              <a variant="warning" type="submit">
                Registration
              </a>
            </Link>
          </p>
        </div>
        <div className="col-md-6 col-sm-12">
          <img
            className="img-fluid"
            src="https://cdni.iconscout.com/illustration/premium/thumb/online-registration-4489363-3723270.png"
            alt="name"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
