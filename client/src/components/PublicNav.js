import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.svg";

function PublicNav() {
  React.useEffect(() => {
    //Menu Opening
    const s = (key) => {
      return document.querySelector(key);
    };
    const menuopen = s(".menuicon");
    const menuclose = s(".closeicon");
    menuopen.addEventListener("click", (e) => {
      s("nav").style = "animation: diagonal 200ms linear; top: 0;";
    });
    menuclose.addEventListener("click", (e) => {
      s("nav").style = " top: -100vh;";
    });
  }, []);

  return (
    <header>
      <section className="nav-wrap">
        <div className="nav-brand">
          <Link to="/"><img src={Logo} alt="Logo" /></Link>
        </div>
        <i className="icon ion-md-menu menuicon"></i>
        <nav>
          <i className="icon ion-md-close closeicon"></i>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
          <Link className="nav-link" to="/login">
            Login
          </Link>
          <Link className="nav-link special" to="/register">
            Register
          </Link>
        </nav>
      </section>
    </header>
  );
}

export default PublicNav;
