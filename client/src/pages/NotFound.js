import React from "react";
import { Link } from "react-router-dom";
import HeadLogo from "../images/HeadLogo.svg";

const { wrapper, main, title, text, img, message } = {
  wrapper: {
    backgroundColor: "#e5e5e5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  main: {
    backgroundColor: "white",
    padding: "3.7rem",
    margin: "0 auto",
    borderRadius: "6px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    boxShadow: "1px 2px 2px 1px rgba(0,0,0,0.1)",
    
  },

  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    padding: "0 .5rem",
    fontSize: "2rem",
    fontWeight: "300",
    color: "#cb4745",
  },

  img: {
    width: "40px",
  },

  message: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
    fontWeight: "300",
    textAlign: "center",
  },
};

function NotFound() {
  return (
    <div style={wrapper}>
      <section style={main}>
        <div style={title}>
          <Link to="/">
            <img src={HeadLogo} alt="logo" style={img} />
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h3 style={text}>TechToday</h3>
          </Link>
        </div>
        <h1 style={message}>Page not found.</h1>
        
      </section>
    </div>
  );
}

export default NotFound;
