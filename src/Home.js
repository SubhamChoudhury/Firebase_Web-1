import React from "react";
import Navbar  from "./navbar";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
  <>
  <Navbar/>
  <Header/>
  <HowItWorks/>
  <AboutUs/>
  <Services/>
  <Contact/>
  <Footer/>
  </>
  );
}

export default Home;