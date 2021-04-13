import React from "react";
import { Link } from "react-router-dom";

function PrivateOuterNav() {
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

  return <View>hello navigation bar</View>;
}

export default PrivateOuterNav;
