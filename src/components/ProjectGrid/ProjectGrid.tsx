import React, { useState } from "react";
import styles from "./ProjectGrid.module.css";
import Image from "next/image";

// Define the IProject interface locally
export interface IProject {
  title: string;
  description: string;
  imgSrc: string;
  name: string;
  website: string;
}

export interface IProps {
  projects: IProject[];
}

const ProjectGrid: React.FC<IProps> = ({ projects }) => {
  const [modalData, setModalData] = useState<IProject | null>(null);

  const openModal = (project: IProject) => {
    setModalData(project);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className={styles.projectGrid}>
      <div className={styles.grid}>
        {projects.map((project, idx) => (
          <div key={idx} className={styles.gridItem}>
            <a href={project.website} target="_blank" rel="noopener noreferrer">
              <Image
                className={styles.projectThumbnail}
                height={300}
                width={300}
                src={project.imgSrc}
                alt={project.name}
              />
            </a>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>
              {project.description.length > 100 ? (
                <>
                  {project.description.substring(0, 100)}... <br />
                  <button
                    className={styles.readMoreButton}
                    onClick={() => openModal(project)}
                  >
                    Read More
                  </button>
                </>
              ) : (
                project.description
              )}
            </p>
          </div>
        ))}
      </div>

      {modalData && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <Image
              className={styles.modalImage}
              height={400}
              width={400}
              src={modalData.imgSrc}
              alt={modalData.name}
            />
            <h2 className={styles.modalTitle}>{modalData.title}</h2>
            <p className={styles.modalDescription}>{modalData.description}</p>
            <button className={styles.closeButton} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;
