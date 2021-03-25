import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useRef } from "react";
import StartPFP from "../images/StartPFP.jfif";
import { Link } from "react-router-dom";
import axios from "axios";

function AccountProfile({ user }) {
  const PFPRef = useRef(null);
  const triggerFileWindow = () => {
    PFPRef.current.click();
  };
  let showDefaultPFP = true;

  if (user) {
    showDefaultPFP = user.pfp === "" ? true : false;
  }

  const handleDeleteAccount = () => {
    alert("hello world");
  };

  return (
    <div className="profile">
      <Formik
        initialValues={{ name: "", password: "" }}
        validateOnChange={false}
        validateOnSubmit={true}
        validateOnBlur={false}
        validate={async (values) => {
          const errors = {};

          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {}}
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

            <label>Your Profile Picture</label>
            <img
              src={showDefaultPFP ? StartPFP : user.pfp}
              alt="pfp"
              onClick={() => triggerFileWindow()}
            />
            <input
              className="input"
              type="file"
              name="pfp"
              ref={PFPRef}
              accept="image/*"
            />
            <Link to="/change-password/fdsljjjjjfjdaslkkflsj" className="Link">
              Change Password
            </Link>
            <button onClick={() => handleDeleteAccount()}>
              Delete Account
            </button>
            <button type="submit" disabled={isSubmitting}>
              Update Profile
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AccountProfile;
