import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Project from "@/components/Project";
import ProjectGrid from "@/components/ProjectGrid";
import styles from "./Projects.module.css";
import { ConstrainedTitle } from "@/components/SectionTitle";

interface ProjectType {
  _id: string;        // Assuming MongoDB will provide an _id
  name: string;
  techs: string[];
  description: string;
  github: string;
  website: string;
  imgSrc: string;
  type: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/projects"); // Adjust the URL if your server runs on a different port
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading projects...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.projects} id="projects">
      <MaxWidthWrapper>
        <ConstrainedTitle side="left">Things I&apos;ve Built</ConstrainedTitle>
        <div className={styles.projectList}>
          {projects.length > 0 && (
            <>
              <Project project={projects[0]} side="right" />
              <Project project={projects[1]} side="left" />
            </>
          )}
        </div>
      </MaxWidthWrapper>
      <ProjectGrid projects={projects.slice(2)} />
    </div>
  );
};

export default Projects;