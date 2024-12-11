import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectGrid from "@/components/ProjectGrid";
import styles from "./Projects.module.css";
import { ConstrainedTitle } from "@/components/SectionTitle";
import { IProject } from "@/components/Project";

const Projects: React.FC = () => {
  const [projectsByType, setProjectsByType] = useState<Record<string, IProject[]>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [activeType, setActiveType] = useState<string>("type1");
  const [visibleProjects, setVisibleProjects] = useState<number>(6); // Default number of projects to show
  const [viewMoreVisible, setViewMoreVisible] = useState<boolean>(false); // Control visibility of View More button

  useEffect(() => {
    const fetchProjectsByType = async () => {
      try {
        const response = await fetch("http://localhost:5545/projects");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();

        // Group projects by type
        const groupedProjects: Record<string, IProject[]> = data.reduce(
          (acc: Record<string, IProject[]>, project: IProject) => {
            acc[project.type] = acc[project.type] || [];
            acc[project.type].push(project);
            return acc;
          },
          {}
        );

        setProjectsByType(groupedProjects);
        setViewMoreVisible(groupedProjects[activeType]?.length > visibleProjects); // Check if the "View More" button is needed
      } catch (err) {
        setError("Error fetching projects.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjectsByType();
  }, [activeType, visibleProjects]);

  const handleViewMore = () => {
    setVisibleProjects((prevVisible) => prevVisible + 6); // Show 6 more projects
  };

  const handleTypeChange = (type: string) => {
    setActiveType(type);
    setVisibleProjects(6); // Reset the number of visible projects when switching types
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
        <ConstrainedTitle side="left">Projects</ConstrainedTitle>
        <div className={styles.typeButtons}>
          <button
            onClick={() => handleTypeChange("type1")}
            className={activeType === "type1" ? styles.activeButton : ""}
          >
            Type 1
          </button>
          <button
            onClick={() => handleTypeChange("type2")}
            className={activeType === "type2" ? styles.activeButton : ""}
          >
            Type 2
          </button>
          <button
            onClick={() => handleTypeChange("type3")}
            className={activeType === "type3" ? styles.activeButton : ""}
          >
            Type 3
          </button>
        </div>

        <div className={styles.projectList}>
          <ProjectGrid
            projects={projectsByType[activeType]?.slice(0, visibleProjects) || []}
          />
          {viewMoreVisible && (
            <button
              className={styles.viewMoreButton}
              onClick={handleViewMore}
            >
              View More
            </button>
          )}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Projects;
