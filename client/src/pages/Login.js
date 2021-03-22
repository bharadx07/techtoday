import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import HeadLogo from "../images/HeadLogo.svg";
import "../css/styles.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Login({ history }) {
  //Only check if jwt is not empty
  useEffect(() => {
    if (localStorage.jwt) {
      //Secure Check for JWT
      const makeRequest = async () => {
        const config = {
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.jwt,
          },
        };
        try {
          await axios.get("/api/v1/users/auth", config);
          history.push("/topics");
        } catch (error) {
          if (!error.message.includes("500")) {
            return "";
          }
        }
      };

      makeRequest();
    }
  }, [history]);

  return (
    <div className="login">
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
