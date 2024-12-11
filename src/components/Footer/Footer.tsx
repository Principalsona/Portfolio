"use client";
import styles from "./Footer.module.css";
import React, { useState } from "react";
import Image from "next/image";


const Footer: React.FC = () => {
  const [isPopupOpen, setPopupOpen] = useState(false); // State to manage the popup visibility

  // Function to toggle the popup
  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div className={styles.footer}>
      <div className={styles.credit}>
        <span onClick={togglePopup} className={styles.creditText}>
          Designed &amp; Built by&nbsp;:{" "}&nbsp;
          <a  target="_blank" rel="noopener noreferrer" className={styles.link}>
            KISHORE KUMAR
          </a>
          &nbsp;&&nbsp;
          <a  target="_blank" rel="noopener noreferrer" className={styles.link}>
            JANAGAN
          </a>
        </span>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <Image
              src="images/developer.jpeg" // Replace with the developer image URL
              alt="Developer"
              width={500}
              height={500}
              className={styles.popupImage}
            />
            <h3>
              <a className={styles.dev}>Developers :{" "}</a>
              <a href="https://kixszh.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.link}>
                KISHORE KUMAR 
              </a>
              &nbsp;&&nbsp;
              <a href="https://janagan00709.github.io/Portfolio/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                JANAGAN
              </a>
            </h3>
            <p>
              Kishore & Janagan are passionate full-stack developers who love building
              impactful web applications and solving complex problems.
            </p>
            <button className={styles.closeButton} onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
