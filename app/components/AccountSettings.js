import React from "react";
import AccountPreferences from "./AccountPreferences";
import AccountProfile from "./AccountProfile";
import Loader from "react-loader-spinner"

function AccountSettings({user, history}) {
  if(!user) {
    return ( 
      <div style={{marginTop: "10rem", display: "flex", justifyContent: "center", height: "70vh", alignItems: "center"}}>
      
      <Loader
        type="TailSpin"
        color="#cb4745"
        height={50}
        width={50}
      />
      </div>
    )
  }
  return (
    <section className="settings">
      <h1>Account Settings</h1>
      <section className="wrapper">
        <AccountProfile serversentuser={user} history={history}/>
        <AccountPreferences serversentuser={user} history={history}/>
      </section>
    </section>
  );
}

export default AccountSettings;
