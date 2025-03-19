import { IconLink } from "@/components/Socials";
import styles from "./Project.module.css";
import clsx from "clsx";
import Image from "next/image";

export interface IBlog {
  title: string;
  description: string;
  author: string;
  imgSrc: string;
}

export interface IProject extends IBlog {
  _id: string;    
  type: any;
  name: string;
  website: string;
  createdAt: string; 
}

export interface IProps {
  project: IProject;
  side: "left" | "right";
}

const Project: React.FC<IProps> = ({ project, side, ...delegated }) => {
  return (
    <div id="Projects" className={clsx(styles.project, styles[side])} {...delegated}>
      <div className={styles.stretch}>
        <a href={project.website}>
          <Image
            className={styles.tiltingImage}
            src={project.imgSrc}
            alt={project.title}
            width={400}
            height={200}
          />
        </a>
        <Image
          width={100}
          height={100}
          className={styles.staticImage}
          src={project.imgSrc}
          alt={project.title}
        />
      </div>

      <div className={clsx(styles.info, styles[side])}>
        <h4 className={clsx(styles.name, styles[side])}>{project.name}</h4>
        <h4 className={clsx(styles.description, styles[side])}>
          {project.description}
        </h4>
        <p className={clsx(styles.author, styles[side])}>By {project.author}</p>
        <ul className={clsx(styles.links, styles[side])}>
          <IconLink href={project.website} target="_blank">
            <span>Visit</span>
          </IconLink>
        </ul>
      </div>
    </div>
  );
};

export default Project;
