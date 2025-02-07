import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectGrid from "@/components/ProjectGrid";
import styles from "./Projects.module.css";
import { ConstrainedTitle } from "@/components/SectionTitle";
import type { IProject } from "@/components/Project";

const API_URL = process.env.NEXT_PUBLIC_PROJECTS_API;

const Projects: React.FC = () => {
  const [projectsByType, setProjectsByType] = useState<Record<string, IProject[]>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [activeType, setActiveType] = useState<string>("type1");
  const [visibleProjects, setVisibleProjects] = useState<number>(6);

  useEffect(() => {
    const fetchProjectsByType = async () => {
      try {
        if (!API_URL) {
          throw new Error("API URL is not defined");
        }

        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data: IProject[] = await response.json();

        const groupedProjects: Record<string, IProject[]> = data.reduce(
          (acc: Record<string, IProject[]>, project: IProject) => {
            acc[project.type] = acc[project.type] || [];
            acc[project.type].push(project);
            return acc;
          },
          {}
        );

        setProjectsByType(groupedProjects);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectsByType();
  }, []);

  const handleViewMore = () => setVisibleProjects((prev) => prev + 6);
  const handleViewLess = () => setVisibleProjects((prev) => Math.max(6, prev - 6));
  const handleTypeChange = (type: string) => {
    setActiveType(type);
    setVisibleProjects(6);
  };

  if (loading) {
    return <div>Loading Blogs...</div>;
  }

  const projects = projectsByType[activeType] || [];
  const canShowMore = projects.length > visibleProjects;
  const canShowLess = visibleProjects > 6;

  const typeTitles: Record<string, string> = {
    type1: "Blogs",
    type2: "Patent",
    type3: "Funding",
    type4: "Committees",
    type5: "Affiliations",
    type6: "Talks",
  };

  return (
    <div className={styles.projects} id="projects">
      <MaxWidthWrapper>
        <div className={styles.typeButtons}>
          {Object.keys(typeTitles).map((type, index, array) => (
            <React.Fragment key={type}>
              <button
                onClick={() => handleTypeChange(type)}
                className={activeType === type ? styles.activeButton : ""}
              >
                {typeTitles[type]}
              </button>
              {index < array.length - 1 && <div className={styles.separator}></div>}
            </React.Fragment>
          ))}
        </div>
        <ConstrainedTitle side="left">{typeTitles[activeType]}</ConstrainedTitle>
        <div className={styles.projectList}>
          <ProjectGrid projects={projects.slice(0, visibleProjects)} />
          <div className={styles.buttonContainer}>
            {canShowMore && (
              <button className={styles.viewMoreButton} onClick={handleViewMore}>
                View More
              </button>
            )}
            {canShowLess && (
              <button className={styles.viewLessButton} onClick={handleViewLess}>
                View Less
              </button>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Projects;
