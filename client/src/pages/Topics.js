import React from "react";
import CustomTitle from "../components/CustomTitle";

function Topics() {
  return (
    <div>
      <CustomTitle page="Topics" />
      topics
      <button onClick={() => localStorage.clear()}>LogOut</button>
    </div>
  );
}

export default Topics;
