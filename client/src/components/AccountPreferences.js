import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import StartPFP from "../images/StartPFP.jfif";

function AccountPreferences({user}) {
 
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
            
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AccountPreferences;
