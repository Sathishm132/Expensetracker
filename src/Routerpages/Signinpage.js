import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";

const Signinpage = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const clickhandler = () => {
    console.log("jhbkiei");
    navigate("/forgot");
   
  };

  const submithandler = (e) => {
    e.preventDefault();
    const enteredemail = email.current.value;
    const enteredpassword = password.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA0lpUzoOCsGC3kldjNFc2I7Shdyo85qM0",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredemail,
          password: enteredpassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let Errormessage = "Authentication failed";
            // if(data&&data.error&&data.error.message){
            //   Errormessage=data.error.message
            // }
            throw new Error(Errormessage);
          });
        }
      })
      .then((data) => {
        localStorage.setItem("token", data.idToken);

        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div>
      <div className="position-absolute p-5 top-50 start-50 translate-middle d-inline-block justify-content-center align-items-center">
        <div className="overlay p-5 shadow ">
          <Form onSubmit={submithandler}>
            <h1 className="d-flex justify-content-center mb-5">Signin</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                ref={email}
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                ref={password}
                placeholder="Password"
              />
            </Form.Group>
            <h6
              style={{ color: "red", style: "none" }}
              className="d-flex justify-content-center m-2"
              onClick={clickhandler}
            >
              Forgot password ?
            </h6>

            <div className="d-grid ">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </div>
        <br />
        <div className="position-relative d-grid">
          <Button
            variant="outline-success"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Dont have account? signUp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signinpage;
