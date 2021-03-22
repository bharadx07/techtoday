import axios from "axios";
import React, { useEffect, useState } from "react";
import ClientTopicContent from "../components/ClientTopicContent";
import NavBar from "../components/NavBar";

function Topics({ history }) {
  const [user, setUser] = useState("");
  //Simple Check To Speed Up Time (No as Secure)

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

  return (
    <div>
      <NavBar variant="privateouter" />
      <ClientTopicContent user={user} />
    </div>
  );
}

export default Topics;
