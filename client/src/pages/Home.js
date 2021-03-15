import React from "react";
import CTA from "../components/CTA";
import CustomTitle from "../components/CustomTitle";
import Footer from "../components/Footer";
import HomeFeatures from "../components/HomeFeatures";
import HomeProductSections from "../components/HomeProductSections";
import HomeTop from "../components/HomeTop";
import HomeTopics from "../components/HomeTopics";
import NavBar from "../components/NavBar";


function Home() {
  return (
    <section>
        <CustomTitle page="Home" />
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
