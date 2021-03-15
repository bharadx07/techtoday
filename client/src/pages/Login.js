import React from "react";
import CustomTitle from "../components/CustomTitle";
import { Formik, Form, Field, ErrorMessage } from "formik";
import HeadLogo from "../images/HeadLogo.svg";
import "../css/styles.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Login({ history }) {
  if (localStorage.jwt) {
    setTimeout(() => {
      history.push("/topics");
    }, 2500);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
          padding: "0 2rem",
          fontSize: "1.1rem",
          fontWeight: "normal",
        }}
      >
        <h3>You Cannot Login Again</h3>
        <br />
        <h3>Redirecting To Topics Page</h3>
      </div>
    );
  }
  return (
    <div className="login">
      <CustomTitle page="Login" />

      <Formik
        initialValues={{ email: "", password: "" }}
        validateOnChange={false}
        validateOnSubmit={true}
        validateOnBlur={false}
        validate={async (values) => {
          const errors = {};
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };

          try {
            const request = await axios.post(
              "/api/v1/users/login",
              values,
              config
            );
            localStorage.jwt = request.data;
          } catch (error) {
            const ErrorMessages = error.response.data;

            if (
              ErrorMessages === "Email is Invalid" ||
              ErrorMessages === "Password is Invalid"
            ) {
              errors.email = "Invalid Login";
              return errors;
            }

            ErrorMessages.forEach((ErrorMessage) => {
              if (
                ErrorMessage.message === '"email" is not allowed to be empty'
              ) {
                errors.email = "Email is Required";
              } else if (
                ErrorMessage.message === '"password" is not allowed to be empty'
              ) {
                errors.password = "Password is Required";
              } else if (
                ErrorMessage.message === '"email" must be a valid email'
              ) {
                errors.email = "Invalid Email";
              }
            });
          }

          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          history.push("/topics");
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <Link to="/">
              <img src={HeadLogo} alt="Logo" />
            </Link>
            <h1>Welcome</h1>
            <h4>Login to TechToday to Continue</h4>
            <label>Email Address</label>
            <Field className="input" type="text" name="email" />
            <ErrorMessage name="email" component="div" />
            <label>Password</label>
            <Field className="input" type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <Link to="/forgot-password" className="Link Forgot">
              Forgot Password?
            </Link>
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
            <Link to="/register" className="Link">
              Dont have an account? <span>Register</span>
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
