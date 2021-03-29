import React, { useState, useEffect } from "react";
import AccountSettings from "../components/AccountSettings";
import axios from "axios";
import NavBar from "../components/NavBar";

function Settings({history}) {
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
      <AccountSettings user={user}  history={history} />
    </div>
  );
}

export default Settings;
