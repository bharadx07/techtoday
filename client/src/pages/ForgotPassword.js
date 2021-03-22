import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import HeadLogo from "../images/HeadLogo.svg";
import axios from "axios";
import { Icon } from "@iconify/react";
import successStandardLine from "@iconify/icons-clarity/success-standard-line";
import { Link } from "react-router-dom";

function ForgotPassword({ history }) {
  const [sentEmail, setSentEmail] = React.useState(false);

  return (
    <div className="forgot-password">
      <Formik
        initialValues={{ email: "" }}
        validateOnChange={false}
        validateOnSubmit={true}
        validateOnBlur={false}
        validate={async (values) => {
          const errors = {};
          try {
            const config = {
              headers: {
                "Content-Type": "application/json",
              },
            };
            await axios.post("/api/v1/users/forgot-password", values, config);
          } catch (error) {
            const ErrorMessage = error.response.data[0].message;
            console.log(ErrorMessage);
            if (ErrorMessage === '"email" is not allowed to be empty') {
              errors.email = "Email is Required";
            } else {
              errors.email = "Invalid Email";
            }
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSentEmail(true);
        }}
      >
        {({ isSubmitting, values }) => (
          <Form className="form">
            {!sentEmail && (
              <>
                <Link to="/">
                  <img src={HeadLogo} alt="Logo" />
                </Link>
                <h1>Forgot Password?</h1>
                <label>Email Address</label>
                <Field className="input" type="text" name="email" />
                <ErrorMessage name="email" component="div" />
                <button type="submit" disabled={isSubmitting}>
                  Generate Reset Link
                </button>
                <Link to="/login" className="Link Forgot">
                  Return to Login
                </Link>
              </>
            )}

            {sentEmail && (
              <>
                <Icon
                  icon={successStandardLine}
                  style={{ color: "#008000", fontSize: "84px", textAlign: 'center', margin: "0 auto" }}
                />
                <h1>Check Your Email</h1>
                
                <h4>If this account exists, Instructions regarding how to change the password will be sent to {values.email}</h4>

                <button onClick={() => {setSentEmail(!sentEmail)}}>Resend Email</button>

              </>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ForgotPassword;
