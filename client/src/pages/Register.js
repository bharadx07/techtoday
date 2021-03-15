import React from "react";
import CustomTitle from "../components/CustomTitle";
import { Formik, Form, Field, ErrorMessage } from "formik";
import HeadLogo from "../images/HeadLogo.svg";
import "../css/styles.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Register({ history }) {
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
          fontWeight: "normal"
        }}
      >
        <h3>You Cannot Register When You Are Logged In</h3>
        <br />
        <h3>Redirecting To Topics Page</h3>
      </div>
    );
  }
  return (
    <div className="register">
      <CustomTitle page="Register" />

      <Formik
        initialValues={{ name: "", email: "", password: "" }}
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
            await axios.post("/api/v1/users/register", values, config);
          } catch (error) {
            const ErrorMessages = error.response.data;
            if (ErrorMessages === "Email Allready Exists") {
              errors.email = "Email Allready Exists";

              return errors;
            }

            ErrorMessages.forEach((ErrorMessage) => {
              if (
                ErrorMessage.message === '"name" is not allowed to be empty'
              ) {
                errors.name = "Name is Required";
              } else if (
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
              } else {
                errors.password = "Needs to be 6+ Characters Long";
              }
            });
          }

          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);

          try {
            //Login the User
            const config = {
              headers: {
                "Content-Type": "application/json",
              },
            };
            const payload = {
              email: values.email,
              password: values.password,
            };
            const request = await axios.post(
              "/api/v1/users/login",
              payload,
              config
            );
            //Store the jwt
            localStorage.jwt = request.data;
            //Send Them To The Topics Page
            history.push("/topics");
          } catch (error) {
            alert("Internal Server Error. Please Close And Reopen This Tab");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <Link to="/"><img src={HeadLogo} alt="Logo" /></Link>
            <h1>Welcome</h1>
            <h4>Register to TechToday to Continue</h4>
            <label>Name</label>
            <Field className="input" type="text" name="name" />
            <ErrorMessage name="name" component="div" />
            <label>Email Address</label>
            <Field className="input" type="text" name="email" />
            <ErrorMessage name="email" component="div" />
            <label>Password</label>
            <Field className="input" type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Register
            </button>
            <Link to="/login" className="Link">
              Allready have an account? <span>Login</span>
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
