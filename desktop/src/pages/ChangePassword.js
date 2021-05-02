import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import HeadLogo from "../images/HeadLogo.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import successStandardLine from "@iconify/icons-clarity/success-standard-line";

function ChangePassword({ match, history }) {
  const [showAppSuccess, setShowAppSuccess] = useState(false);

  const changeId = match.params.changeid;

  return (
    <div className="change-password">
      <Formik
        initialValues={{ password: "" }}
        validateOnChange={false}
        validateOnSubmit={true}
        validateOnBlur={false}
        validate={async (values) => {
          const errors = {};

          try {
            const config = {
              headers: {
                "Content-Type": "application/json",
                "auth-token": changeId,
              },
            };
            await axios.put("/api/v1/users/change-password", values, config);
          } catch (error) {
            errors.password = error.response.data;
          }

          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          const url = window.location.href;
          if (url.includes("?from=settings")) {
            history.push("/settings?change=success");
          } else if (url.includes("?from=app")) {
            setShowAppSuccess(true);
          } else {
            history.push("/login");
          }
        }}
      >
        {({ isSubmitting, values }) => (
          <Form className="form">
            {showAppSuccess === false && (
              <>
                <Link to="/">
                  <img src={HeadLogo} alt="Logo" />
                </Link>
                <h1>Change Password</h1>
                <h4>Enter a new password below to change your password</h4>
                <label>New Password</label>
                <Field className="input" type="password" name="password" />
                <ErrorMessage name="password" component="div" />
                <button type="submit" disabled={isSubmitting}>
                  Change Password
                </button>
              </>
            )}
            {showAppSuccess && (
              <>
                <Icon
                  icon={successStandardLine}
                  style={{
                    color: "#008000",
                    fontSize: "84px",
                    textAlign: "center",
                    margin: "0 auto",
                  }}
                />
                <h1>Password Changed</h1>

                <h4>
                  You can now continue to browse in the app with your changed
                  password.
                </h4>
              </>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ChangePassword;
