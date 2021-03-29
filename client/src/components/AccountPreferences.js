import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { v4 as uuidv4 } from "uuid";
import { TopicsList } from "../constants/TopicInfo";
import axios from "axios";

function AccountPreferences({ serversentuser }) {
  const [user, setuser] = useState(serversentuser);

  const topicsusers = user.topics;

  return (
    <div className="preferences">
      <Formik
        initialValues={{
          name: "",
          password: "",
          newsdefcount: user.newsDefaultCount,
          jobsdefcount: user.jobDefaultCount,
        }}
        validateOnChange={false}
        validateOnSubmit={true}
        validateOnBlur={false}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);

          const commonauthconfig = {
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.jwt,
            },
          };

          const res = await axios.put("/api/v1/users/change-topics", {newtopics: topicsusers}, commonauthconfig);
          



          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <h2>Preferences</h2>
            <label>Topics (Check At Least One)</label>
            {TopicsList.map((topic) => {
              return (
                <section className="flexed" key={uuidv4()}>
                  <Field
                    name={topic}
                    type="checkbox"
                    checked={user.topics.includes(topic)}
                    onClick={(e) => {
                      if (user.topics.includes(topic)) {
                        if (topicsusers.length !== 1) {
                          const newtopics = user.topics.filter((v, i, a) => {
                            return v !== topic;
                          });
                          setuser({ ...user, topics: newtopics });
                        }
                      } else {
                        setuser({ ...user, topics: [...topicsusers, topic] });
                      }
                    }}
                  />
                  <label>{topic}</label>
                </section>
              );
            })}

            <label>News Initial Display (1-9)</label>

            <Field
              type="number"
              className="input"
              name="newsdefcount"
              min={1}
              max={9}
            />
            <label>Jobs Initial Display (1-9)</label>

            <Field
              type="number"
              className="input"
              name="jobsdefcount"
              min={1}
              max={9}
            />
            <button type="submit">Update Preferences</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AccountPreferences;
