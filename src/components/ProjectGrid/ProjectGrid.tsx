import { IProject } from "@/components/Project";
import styles from "./ProjectGrid.module.css";
import Image from "next/image";

export interface IProps {
  projects: IProject[];
}

const ProjectGrid: React.FC<IProps> = ({ projects }) => {
  return (
    <div className={styles.projectGrid}>
      <div className={styles.grid}>
        {projects.map((project, idx) => (
          <div key={idx} className={styles.gridItem}>
            <a href={project.website}>
              <Image
                className={styles.projectThumbnail}
                height={300}
                width={300}
                src={project.imgSrc}
                alt={project.name}
              />
            </a>
            <h3 className="title">{project.title}</h3>
            <p className="description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
