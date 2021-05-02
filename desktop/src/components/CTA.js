import React from "react";
import { Link } from "react-router-dom";


function CTA() {
  return (
    <div className="cta">
      <h1>
        Ready to Try <span>TechToday</span>
      </h1>
      <Link to="/register">
        <button>Create An Account</button>
      </Link>
    </div>
  );
}

export default CTA;
