import React from "react";
import Logo from "../images/Logo.svg";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import arrowBack from '@iconify/icons-akar-icons/arrow-back';

function PrivateInnerNav({path}) {
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
          <Link to="/topics">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <i className="icon ion-md-menu menuicon"></i>
        <nav>
          <i className="icon ion-md-close closeicon"></i>
          <Link className="nav-link" to={`/topic/${path}/news`}>
            News
          </Link>
          <Link className="nav-link" to={`/topic/${path}/jobs`}>
            Jobs
          </Link>
          <Link
            className="nav-link"
            to="/topics"
          >
            <div style={{display: "flex", alignItems: "center"}}>Back <Icon icon={arrowBack} style={{fontSize: '20px', marginLeft: '.4rem'}} /></div>
          </Link>
        </nav>
      </section>
    </header>
  );
}

export default PrivateInnerNav;

