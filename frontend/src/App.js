import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InfidelitySection from "./components/InfidelitySection";
import MapSection from "./components/MapSection";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import PrivacyPolicy from "./components/PrivacyPolicy";
import BlogPage from "./components/BlogPage";
import BlogArticle from "./components/BlogArticle";

// Home Page Component
const HomePage = () => (
  <>
    <Header />
    <main>
      <Hero />
      <InfidelitySection />
      <MapSection />
      <About />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

// Privacy Policy Page Component
const PrivacyPage = () => (
  <>
    <Header />
    <PrivacyPolicy />
    <Footer />
    <WhatsAppButton />
  </>
);

// Blog Page Component
const BlogPageWrapper = () => (
  <>
    <Header />
    <BlogPage />
    <Footer />
    <WhatsAppButton />
  </>
);

// Blog Article Page Component
const BlogArticleWrapper = () => (
  <>
    <Header />
    <BlogArticle />
    <Footer />
    <WhatsAppButton />
  </>
);

function App() {
  return (
    <div className="App bg-[#0a0a0f] min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/politica-confidentialitate" element={<PrivacyPage />} />
          <Route path="/blog" element={<BlogPageWrapper />} />
          <Route path="/blog/:slug" element={<BlogArticleWrapper />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
