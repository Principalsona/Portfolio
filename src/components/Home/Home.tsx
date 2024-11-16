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
import Map from "@/components/Datamap";
import Form from "@/components/Form";
import Technical from "@/components/Technical";
import styles from "./Home.module.css";
import FormPage from "@/components/Form/Form";

const App = ({ initialTheme }: { initialTheme: string }) => {
  const [showForm, setShowForm] = useState(false);

  const data = {
    'USA': { fillKey: 'USA' },
    'CAN': { fillKey: 'CAN' },
};

// Fill colors for different countries
const fills = {
    'USA': '#ff7f0e',
    'CAN': '#2ca02c',
    defaultFill: '#dddddd', // Default color for countries not defined in data
};

const mapstyles = {
  container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
  },
  title: {
      fontSize: '32px',
      marginBottom: '20px',
      justifyContent: 'left',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
  },
};

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
      <FormPage/>

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
        <div style={mapstyles.container}>
            <h1 style={mapstyles.title}>COUNTRY VISITED</h1>
            {!showForm && <Map
                width={800}
                height={500}
                scope="world" // You can change this to 'usa' or 'custom' as needed
                fills={fills}
                data={data}
            />}
        </div>

        {!showForm && <Projects />}
        {!showForm && <Technical />}
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
