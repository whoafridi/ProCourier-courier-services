import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const Registration = () => {
  const { signInUsingGoogle } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
 
  const auth = getAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // user registration
  const handleRegistration = (e) => {

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        setUserName();
        //console.log(user);
        history.push(redirect_uri);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  // set user name
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };
  // google login
  const handleGooglelogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div className="container">
      <h2 className="fw-bold mt-3 mb-3 text-center">
        Welcome to Registration!
      </h2>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-5 col-sm-12">
          <Form noValidate validated={validated}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter name</Form.Label>
              <InputGroup hasValidation>
              <Form.Control required
                className="rounded-pill"
                type="text"
                placeholder="Enter your name"
                onBlur={handleNameChange}
              />
               <Form.Control.Feedback type="invalid">
                  Please enter a name.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <InputGroup hasValidation>
              <Form.Control required
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
              <Form.Control required
                className="rounded-pill"
                type="password"
                placeholder="Password"
                onBlur={handlePasswordChange}
              />
               <Form.Control.Feedback type="invalid">
                  Please enter an password
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={handleRegistration}
              className="rounded-pill"
            >
              Registration
            </Button>
          </Form>
          <button
            onClick={handleGooglelogin}
            className="btn btn-warning mt-2 mb-3 rounded-pill"
          >
            Google Sign In
          </button>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-decoration-none ps-2">
              <a
                className="text-decoration-none"
                variant="warning"
                type="submit"
              >
                Login
              </a>
            </Link>
          </p>
        </div>
        <div className="col-md-7 col-sm-12">
          <img
            className="img-fluid"
            src="https://img.freepik.com/free-vector/cartoon-character-filling-form-survey-checklist-man-writing-test-signing-business-medical-document-flat-illustration_74855-20483.jpg"
            alt="name"
          />
        </div>
      </div>
    </div>
  );
};

export default Registration;
