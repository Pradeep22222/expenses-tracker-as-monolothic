import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "./userState/userAction";
const Login = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    user._id && navigate("/dashboard");
  }, [user]);
  const handleOnChange = () => {
    let { name, value } = e.target;
    if (name === "email") {
      value = value.toLowerCase();
    }
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginAction(form));
  };
  return (
    <MainLayout>
      <div className="login-page d-flex justify-content-center mt-5 ">
        <div className="login-form border p-4 shadow-lg bg-light mt-5">
          <h3>Welcome Back</h3>
          <hr />
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                onChange={handleOnChange}
                type="email"
                placeholder="Enter email"
                name="email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                required
                ref={passwordRef}
                type="password"
                placeholder="Password"
                name="password"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <div className="text-end">
            New here? <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
