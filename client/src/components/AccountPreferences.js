import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import StartPFP from "../images/StartPFP.jfif";
import { v4 as uuidv4 } from "uuid";
import {TopicsList} from "../constants/TopicInfo"

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
            <label>Topics (Check To Show)</label>
            {TopicsList.map(topic => {
              return (
                 <section className="flexed"key={uuidv4()}>
                 <Field name={topic} type="checkbox" checked={user.topics.includes(topic)}/><label>{topic}</label>  
                </section>
              )
            })}
        
            <label>News Initial Display</label>

            <Field type="number" className="input" name="newsdefcount" />
           <label>Jobs Initial Display</label>

            <Field type="number" className="input" name="jobsdefcount" />
            <button type="submit">Update Preferences</button>
            
                      
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AccountPreferences;
