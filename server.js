const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config(); // For environment variables

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI || "your-mongodb-connection-string";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Blog Schema and Model
const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
  imgSrc: String,
});

const Blog = mongoose.model("Blog", blogSchema);

// Project Schema and Model (Existing)
const projectSchema = new mongoose.Schema({
  name: String,
  techs: [String],
  description: String,
  github: String,
  website: String,
  imgSrc: String,
  type: String,
});

const Project = mongoose.model("Project", projectSchema);

// Routes

// POST route to add a new project
app.post("/projects", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json({ message: "Project added successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save project data" });
  }
});

// GET route to fetch all projects
app.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

// POST route to add a new blog post
app.post("/projects", async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json({ message: "Blog post added successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save blog post data" });
  }
});

// GET route to fetch all blog posts
app.get("/projects", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch blog posts" });
  }
});

// Start the server
const PORT = process.env.PORT || 5545;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
