import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <Link className={styles.navLink} href="#about">
        <p className={styles.navText}>About</p>
        About
      </Link>
      <Link className={styles.navLink} href="#Experiences">
        <p className={styles.navText}>Experience</p>
        Experience
      </Link>
      <Link className={styles.navLink} href="#projects">
        <p className={styles.navText}>Blogs</p>
        Blogs
      </Link>
      <Link className={styles.navLink} href="#Technical">
        <p className={styles.navText}>Research Papers</p>
        Research Papers
      </Link>
      <Link className={styles.navLink} href="#Awards">
        <p className={styles.navText}>Awards</p>
        Awards
      </Link>
      <Link className={styles.navLink} href="#Education">
        <p className={styles.navText}>Education</p>
        Education
      </Link>
      <Link className={styles.navLink} href="#contact">
        <p className={styles.navText}>Contact</p>
        Contact
      </Link>
    </>
  );
};

export default Navigation;
