import React from "react";
import NavBar from "./NavBar";
import Home from "./home"
import History from "./History";
import Specs from "./Specs"
import Performance from "./Performance";
function LandPage() {
  return (
    <div>
      <NavBar />
      <Home />
      <History />
      <Specs />
      <Performance/>
    </div>
  );
}

export default LandPage;
