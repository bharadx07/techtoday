import React from "react";
import NavBar from "../components/NavBar";
import PFP from "../images/pfp.png";


function Contact() {
  return (
    <div className="contact-wrapper" >
    
      <NavBar variant="public" />
      <main className="contact">
      <h1>Meet The Creator</h1>
      <h3>Bharadwaj Duggaraju</h3>
      <section>
       
        <img src={PFP} alt="Bharadwaj" />
        <p>
          Bharadwaj Duggaraju is the solo developer for this project.
          He enjoyes coding, hardware and design. If you have any bugs or
          tweaks, or just want to contact him, click the link below.
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfAWXmeWFGRH3NciBCGrH0-4H2Z9S2UFgoQtSwToE37UFJshA/viewform?usp=sf_link" target="_blank"  rel="noreferrer"><button>Contact Bharadwaj</button></a>
      </section>
      </main>
      
    </div>
  );
}

export default Contact;
