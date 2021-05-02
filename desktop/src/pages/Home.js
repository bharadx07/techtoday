import React from "react";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import HomeFeatures from "../components/HomeFeatures";
import HomeProductSections from "../components/HomeProductSections";
import HomeTop from "../components/HomeTop";
import HomeTopics from "../components/HomeTopics";
import NavBar from "../components/NavBar";


function Home() {
  return (
    <section>
        <NavBar variant="public" />
        <HomeTop />
        <HomeProductSections />
        <HomeTopics />
        <HomeFeatures />
        <CTA />
        <Footer />
    
    </section>
  );
}

export default Home;
