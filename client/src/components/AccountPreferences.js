import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik"
import StartPFP from "../images/StartPFP.jfif"

function AccountPreferences() {
  return (
    <div className="preferences">
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
            <h2>Preferences</h2>
            <label>Your Name</label>
            <Field className="input" type="text" name="name" />
            <ErrorMessage name="name" component="div" />
            <label>Your Email</label>
            <Field className="input" type="text" name="email" />
            <ErrorMessage name="email" component="div" />
            <label>Your PFP</label>
            <img src={StartPFP} alt="pfp" />
            <Field className="input" type="file" name="pfp" />
            <button type="submit" disabled={isSubmitting}>
              Update Profile
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AccountPreferences;
