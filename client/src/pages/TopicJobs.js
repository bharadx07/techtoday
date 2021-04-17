import React, { useState, useEffect } from "react";
import ClientJobsContent from "../components/ClientJobsContent";
import axios from "axios";
import { TopicListURLQueries } from "../constants/TopicInfo";
import NavBar from "../components/NavBar";
import swal from "sweetalert";

let jobs_cache = {};

function TopicJobs({ match, history }) {
  const [user, setUser] = useState("");
  const [jobs, setJobs] = useState(null);

 

  const jobTopic = match.params.topicname;

  if (!TopicListURLQueries.includes(jobTopic)) {
    history.push("/404");
  }

  if (!localStorage.jwt) {
    history.push("/login");
  }

  //Secure Check for JWT
  useEffect(() => {
    const makeRequest = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.jwt,
        },
      };
      const request = await axios.get("/api/v1/users/auth", config);
      setUser(request?.data);
    };

    makeRequest().catch((error) => {
      if (!error.message.includes("500")) {
        history.push("/login");
      }
    });
  }, [history]);

  useEffect(() => {
    const makeJobsReq = async () => { 
      const res = await axios.post(`/api/v1/techtoday/jobs/${jobTopic}`, null, {
        headers: {
          "auth-token": localStorage.jwt,
        },
      });

      setJobs(res.data);

      jobs_cache[jobTopic] = res.data;


    };



    if (jobs_cache[jobTopic] === undefined) {
      makeJobsReq().catch(err => {
        if(err.message.includes("500")) {
          swal({
            title: "Error Getting Jobs",
            text: "There was an error fetching jobs. We will try to fix it. If it does not fix after multiple tries, please close and reopen the tab",
            icon: "error",
            buttons: true,
          });
          window.location.reload()
        } else {
          history.push("/login")
        }
      });
    } else {
      setJobs(jobs_cache[jobTopic])
    }


  }, [jobTopic, history]);

  return (
    <div>
      <NavBar variant="privateinner" path={jobTopic} />
      <ClientJobsContent user={user} page={jobTopic} jobs={jobs} />
    </div>
  );
} 

export default TopicJobs;
