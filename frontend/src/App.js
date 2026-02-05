import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MapSection from "./components/MapSection";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-[#0a0a0f] min-h-screen">
      <Header />
      <main>
        <Hero />
        <MapSection />
        <About />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
