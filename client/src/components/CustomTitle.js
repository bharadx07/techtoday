import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

function CustomTitle({ page }) {
  console.log("__init__ "+ page)
  return (
    <HelmetProvider>
      <Helmet>
        <title>TechToday</title>
      </Helmet>
    </HelmetProvider>
  );
}

export default CustomTitle;
