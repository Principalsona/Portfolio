"use client";

import React, { useEffect, useState } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Dots from "@/components/Dots";
import Education from "@/components/Education";
import Email from "@/components/Email";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import Splash from "@/components/Splash";
import Form from "@/components/Form";
import Awards from "@/components/Awards";
import Map from "@/components/Datamap";
import Technical from "@/components/Technical";
import styles from "./Home.module.css";

const App = ({ initialTheme }: { initialTheme: string }) => {
  const [showForm, setShowForm] = useState(false);

  // Check the hash on component mount
  useEffect(() => {
    if (window.location.hash === "#Form") {
      setShowForm(true); // Show the form if hash is #Form
    } else {
      setShowForm(false); // Hide the form if hash is anything else
    }
  }, []);

  return (
    <>
      {/* Socials and Email components are always visible */}
      <Socials />
      <Email />

      <div className={styles.grid}>
        {/* Conditionally render Header if not in #Form page */}
        {!showForm && <Header initialTheme={initialTheme} />}
        {!showForm && (
          <Dots>
            <Hero />
          </Dots>
        )}
        {!showForm && <About />}
        {!showForm && <Experiences />}
        {/* {!showForm && <Map />} */}
        {!showForm && <Projects />}
        {!showForm && <Technical />}
        {!showForm && <Awards />}
        {!showForm && <Education />}
        {!showForm && <Contact />}
        {!showForm && <Footer />}
      </div>

      {/* Only show the form if the hash is #Form */}
      {showForm && <Form />}

      {/* Always show Splash */}
      <Splash />
    </>
  );
};

export default App;
