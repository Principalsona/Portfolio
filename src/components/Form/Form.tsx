"use client";

import React, { useState } from "react";
import axios from "axios";

// Load environment variables
const LOGIN_USERNAME = process.env.NEXT_PUBLIC_LOGIN_USERNAME || "";
const LOGIN_PASSWORD = process.env.NEXT_PUBLIC_LOGIN_PASSWORD|| "";
const PROJECTS_API = process.env.NEXT_PUBLIC_PROJECTS_API || "";

const FormPage: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    imgSrc: "",
    type: "type1", // Default type
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.username === LOGIN_USERNAME && loginData.password === LOGIN_PASSWORD) {
      setIsLoggedIn(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid username or password.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTypeSelect = (type: string) => {
    setFormData({ ...formData, type });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      await axios.post(PROJECTS_API, formData);
      alert("Project added successfully!");
      setFormData({
        title: "",
        description: "",
        author: "",
        imgSrc: "",
        type: "type1", // Reset to default type
      });
    } catch (error) {
      setErrorMessage("Failed to submit the form. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            maxWidth: "400px",
            width: "100%",
            padding: "2rem",
            backgroundColor: "#608BC1",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
          }}
        >
          <h1
            style={{
              fontSize: "2rem",
              textAlign: "center",
              color: "#133E87",
              marginBottom: "1rem",
            }}
          >
            Login
          </h1>
          {errorMessage && (
            <p
              style={{
                color: "rgb(255, 77, 79)",
                textAlign: "center",
                marginBottom: "1rem",
              }}
            >
              {errorMessage}
            </p>
          )}
          <form
            onSubmit={handleLoginSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <label
              style={{
                fontSize: "1rem",
                color: "#133E87",
              }}
            >
              Username:
              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleLoginChange}
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #608BC1",
                  borderRadius: "4px",
                  fontSize: "1rem",
                  color: "#133E87",
                  backgroundColor: "#fff",
                }}
              />
            </label>
            <label
              style={{
                fontSize: "1rem",
                color: "#133E87",
              }}
            >
              Password:
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #608BC1",
                  borderRadius: "4px",
                  fontSize: "1rem",
                  color: "#133E87",
                  backgroundColor: "#fff",
                }}
              />
            </label>
            <button
              type="submit"
              style={{
                padding: "0.75rem",
                backgroundColor: "#133E87",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          padding: "2rem",
          backgroundColor: "#608BC1",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            textAlign: "center",
            color: "#133E87",
            marginBottom: "1rem",
          }}
        >
          Submit Your Project
        </h1>
        {errorMessage && (
          <p
            style={{
              color: "#ff4d4f",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            {errorMessage}
          </p>
        )}
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <label
            style={{
              fontSize: "1rem",
              color: "#133E87",
            }}
          >
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #608BC1",
                borderRadius: "4px",
                fontSize: "1rem",
                color: "#133E87",
                backgroundColor: "#fff",
              }}
            />
          </label>
          <label
            style={{
              fontSize: "1rem",
              color: "#133E87",
            }}
          >
            Description:
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #608BC1",
                borderRadius: "4px",
                fontSize: "1rem",
                color: "#133E87",
                backgroundColor: "#fff",
              }}
            />
          </label>
          <label
            style={{
              fontSize: "1rem",
              color: "#133E87",
            }}
          >
            Author:
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #608BC1",
                borderRadius: "4px",
                fontSize: "1rem",
                color: "#133E87",
                backgroundColor: "#fff",
              }}
            />
          </label>
          <label
            style={{
              fontSize: "1rem",
              color: "#133E87",
            }}
          >
            Image URL:
            <input
              type="url"
              name="imgSrc"
              value={formData.imgSrc}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #608BC1",
                borderRadius: "4px",
                fontSize: "1rem",
                color: "#133E87",
                backgroundColor: "#fff",
              }}
            />
          </label>
          <label
            style={{
              fontSize: "1rem",
              color: "#133E87",
            }}
          >
            Categories :
            
          
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <button
              type="button"
              onClick={() => handleTypeSelect("type1")}
              style={{
                padding: "0.5rem",
                backgroundColor: formData.type === "type1" ? "#133E87" : "",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Blogs
            </button>
            <button
              type="button"
              onClick={() => handleTypeSelect("type2")}
              style={{
                padding: "0.5rem",
                backgroundColor: formData.type === "type2" ? "#133E87" : "",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Patent
            </button>
            <button
              type="button"
              onClick={() => handleTypeSelect("type3")}
              style={{
                padding: "0.5rem",
                backgroundColor: formData.type === "type3" ? "#133E87" : "",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Grants Received
            </button>
            <button
              type="button"
              onClick={() => handleTypeSelect("type4")}
              style={{
                padding: "0.5rem",
                backgroundColor: formData.type === "type4" ? "#133E87" : "",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Committees
            </button>
            <button
              type="button"
              onClick={() => handleTypeSelect("type5")}
              style={{
                padding: "0.5rem",
                backgroundColor: formData.type === "type5" ? "#133E87" : "",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Affiliations
            </button>
            <button
              type="button"
              onClick={() => handleTypeSelect("type6")}
              style={{
                padding: "0.5rem",
                backgroundColor: formData.type === "type6" ? "#133E87" : "",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Talks
            </button>
          </div>
          </label>
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              padding: "0.75rem",
              backgroundColor: isSubmitting ? "" : "#133E87",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
