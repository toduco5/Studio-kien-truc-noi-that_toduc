import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Team from "./components/Team";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./App.css";

const sections = ["hero", "about", "services", "projects", "process", "team", "testimonials", "contact"];

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;
      let current = "hero";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollY) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--scroll-percent', '0%');
  }, []);

  return (
    <div className="app">
      <Header activeSection={activeSection} />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <Team />
      <Clients />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;