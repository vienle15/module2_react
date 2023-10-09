import React from "react";
import Services from "../Services";
import Portfolio from "../Portfolio";
import About from "../About";
import Team from "../Team";
import Clients from "../Clients";
import Contact from "../Contact";

function Home() {
  return (
    <>
      {/* Services*/}
      <Services />
      {/* Portfolio Grid*/}
      <Portfolio />
      {/* About */}
      <About />
      {/* Team*/}
      <Team />
      {/* Clients*/}
      <Clients />
      {/* Contact*/}
      <Contact />
    </>
  );
}

export default Home;
