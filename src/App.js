import React from "react";
import Navbar  from "./navbar";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import AboutUs from "./API/AboutUs";
import Services from "./Services";
import Contact from "./Contact";

function App() {
  return (
  <>
  <Navbar/>
  <Header/>
  <HowItWorks/>
  <AboutUs/>
  <Services/>
  <Contact/>
  </>
  );
}

export default App;
