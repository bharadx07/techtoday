import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AccountProfile({ serversentuser, history }) {
  const [user, setUser] = useState(serversentuser);
  const [success, setSuccess] = useState(false);
  const [changepasswordlink, setchangepasswordlink] = useState("");

  const makereq = async () => {
    const req = await axios.get(
      "/api/v1/users/change-password-internal-get-token",
      { headers: { "auth-token": localStorage.jwt } }
    );

    setchangepasswordlink(`/change-password/${req.data}?from=settings`);
  };

  useEffect(() => {
    makereq();
    const url = window.location.href;
    if (url.includes("?change=success")) {
      setSuccess(true);
    }
  }, []);

  const handleDeleteAccount = async () => {
    const areyousure = window.confirm("Are You Sure You Want To Do This");
    if (areyousure) {
      await axios.delete("/api/v1/users/delete-account", {
        headers: { "auth-token": localStorage.jwt },
      });

      history.push("/");
    }
  };

  return (
    <div className="profile">
      <Formik
        initialValues={{ name: "", email: "" }}
        validateOnChange={false}
        validateOnSubmit={true}
        validateOnBlur={false}
        validate={async (values) => {
          const errors = {};

          const chooseRedirect = (errorstatus) => {
            if (errorstatus === 403 || errorstatus === 401) {
              history.push("/login");
            }
          };

          const commonauthconfig = {
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.jwt,
            },
          };

          let newname = user?.name;
          let newemail = user?.email;

          let succeeded = true;

          try {
            if (values.name !== "") {
              const res = await axios.put(
                "/api/v1/users/change-name",
                { newname: values.name },
                commonauthconfig
              );

              newname = res.data;
            }
          } catch (error) {
            chooseRedirect(error.response.status);
            setSuccess(false);
            errors.name = error.response.data.message;
            succeeded = false;
          }

          try {
            if (values.email !== "") {
              const response = await axios.put(
                "/api/v1/users/change-email",
                { newemail: values.email },
                commonauthconfig
              );

              newemail = response.data;
            }
          } catch (error) {
            chooseRedirect(error.response.status);
            setSuccess(false);
            errors.email = error.response.data;
            succeeded = false;
          }

          if (succeeded) {
            setSuccess(true);
          }

          setUser({ ...user, name: newname, email: newemail });

          return errors;
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <h2>Profile</h2>
            <label>Your Name</label>
            <Field
              className="input"
              type="text"
              name="name"
              placeholder={user.name ?? ""}
            />
            <ErrorMessage name="name" component="div" />
            <label>Your Email</label>
            <Field
              className="input"
              type="text"
              name="email"
              placeholder={user.email ?? ""}
            />
            <ErrorMessage name="email" component="div" />

            <Link to={changepasswordlink} className="Link">
              Change Password
            </Link>
            <button type="button" onClick={() => handleDeleteAccount()}>
              Delete Account
            </button>
            <button type="submit" disabled={isSubmitting}>
              Update Profile
            </button>
            {success && (
              <div style={{ color: "green", textAlign: "center" }}>
                Updated Account!
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AccountProfile;
