import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Testimonials from "./Components/Testimonials/Testimonials";
import Process from "./Components/Process/Process";
import FAQ from "./Components/FAQ/FAQ";
import Footer from "./Components/Footer/Footer";
import Copywright from "./Components/Copywright/Copywright";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
      <div className="main">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Process />
        <FAQ />
        <Contact/>
        <Footer/>
        <Copywright/>
      </div>
  );
}

export default App;
