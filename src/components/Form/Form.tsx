// Add this line at the top of your file to mark it as a Client Component
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const techsArray = formData.techs.split(",").map((tech) => tech.trim()); // Split techs by comma
    const dataToSend = { ...formData, techs: techsArray };

    try {
      const response = await axios.post("https://your-mongodb-api-link.com/projects", dataToSend);
      alert("Project added successfully!");
    } catch (error) {
      console.error("Error adding project:", error);
      alert("Failed to add project.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Add New Project</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Project Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Technologies (comma-separated)
          <input
            type="text"
            name="techs"
            value={formData.techs}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Description
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className={styles.textarea}
          />
        </label>

        <label className={styles.label}>
          GitHub Link
          <input
            type="url"
            name="github"
            value={formData.github}
            onChange={handleChange}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Website Link
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Image Source URL
          <input
            type="text"
            name="imgSrc"
            value={formData.imgSrc}
            onChange={handleChange}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Project Type
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </label>

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;
