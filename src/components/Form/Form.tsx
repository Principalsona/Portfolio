"use client";

import React, { useState } from "react";
import axios from "axios";
import styles from "./FormPage.module.css";

const FormPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    techs: "",
    description: "",
    github: "",
    website: "",
    imgSrc: "",
    type: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    // Process techs into an array
    const techsArray = formData.techs.split(",").map((tech) => tech.trim());
    const dataToSend = { ...formData, techs: techsArray };

    try {
      const response = await axios.post("http://localhost:5000/projects", dataToSend); // Change to your deployed backend URL if necessary
      alert("Project added successfully!");
      setFormData({
        name: "",
        techs: "",
        description: "",
        github: "",
        website: "",
        imgSrc: "",
        type: "",
      });
    } catch (error) {
      setErrorMessage("Failed to submit the form. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Submit Your Project</h1>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Technologies (comma-separated):
          <input
            type="text"
            name="techs"
            value={formData.techs}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          GitHub URL:
          <input
            type="url"
            name="github"
            value={formData.github}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Website URL:
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="url"
            name="imgSrc"
            value={formData.imgSrc}
            onChange={handleChange}
          />
        </label>
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
          />
        </label>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default FormPage;
