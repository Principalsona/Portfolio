import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectGrid from "@/components/ProjectGrid";
import styles from "./Projects.module.css";
import { ConstrainedTitle } from "@/components/SectionTitle";
import { IProject } from "@/components/Project";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [visibleProjects, setVisibleProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5545/projects");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data);
        const initialVisibleCount = window.innerWidth >= 768 ? 3 : 6;
        setVisibleProjects(data.slice(0, initialVisibleCount)); // Show initial projects based on screen sizeconsole.log('Projects component mounte
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleViewMore = () => {
    setVisibleProjects(projects.slice(0, visibleProjects.length + 6)); // Load more 6 projects at a time
    setIsExpanded(true); // Set expanded state to true when "View More" is clicked
  };

  const handleViewLess = () => {
    setVisibleProjects(projects.slice(0, 6)); // Reset to the first 6 projects
    setIsExpanded(false); // Set expanded state to false when "View Less" is clicked
  };

  if (loading) {
    return <div>Loading projects...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.projects} id="projects">
      <MaxWidthWrapper>
        <ConstrainedTitle side="left">Blogs</ConstrainedTitle>
        <div className={styles.projectList}>
          <ProjectGrid projects={visibleProjects} />
        </div>
        <div className={styles.buttonContainer}>
          {visibleProjects.length < projects.length && !isExpanded && (
            <button onClick={handleViewMore} className={styles.viewMoreButton}>
              View More
            </button>
          )}
          {isExpanded && (
            <button onClick={handleViewLess} className={styles.viewLessButton}>
              View Less
            </button>
          )}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Projects;
