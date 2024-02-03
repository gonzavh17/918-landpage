import React from "react";
import NavBar from "./NavBar";
import Home from "./home"
import History from "./History";
import Specs from "./Specs"
import Footer from "./footer";
import Specifications from "./Specifications";


function LandPage() {
  return (
    <div>
      <NavBar />
      <Home />
      <History />
      <Specs />
      <Specifications/>
      <Footer/>
    </div>
  );
}

export default LandPage;
