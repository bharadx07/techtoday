import React from "react";
import AccountPreferences from "./AccountPreferences";
import AccountProfile from "./AccountProfile";

function AccountSettings({user}) {
  return (
    <section className="settings">
      <h1>Account Settings</h1>
      <section className="wrapper">
        <AccountProfile user={user}/>
        <AccountPreferences />
      </section>
    </section>
  );
}

export default AccountSettings;
