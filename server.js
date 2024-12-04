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

// Schema and model
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
app.post("/projects", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json({ message: "Project added successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save project data" });
  }
});

// Start the server
const PORT = process.env.PORT || 5545;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// Existing code...

// Route to get all projects
app.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

// Existing code...