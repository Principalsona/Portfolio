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

export interface IProps {
  blog: IBlog;
  side: "left" | "right";
}

const Project: React.FC<IProps> = ({ blog, side, ...delegated }) => {
  return (
    <div className={clsx(styles.project, styles[side])} {...delegated}>
      <div className={styles.stretch}>
        <a href="/">
          <Image
            className={styles.tiltingImage}
            src={blog.imgSrc}
            alt={blog.title}
            width={400}
            height={200}
          />
        </a>
        <Image
          width={100}
          height={100}
          className={styles.staticImage}
          src={blog.imgSrc}
          alt={blog.title}
        />
      </div>

      <div className={clsx(styles.info, styles[side])}>
        <h4 className={clsx(styles.name, styles[side])}>{blog.title}</h4>
        <h4 className={clsx(styles.description, styles[side])}>
          {blog.description}
        </h4>
        <p className={clsx(styles.author, styles[side])}>By {blog.author}</p>
        <ul className={clsx(styles.links, styles[side])}>
          <IconLink href="/" target="_blank">
            <span>Read More</span>
          </IconLink>
        </ul>
      </div>
    </div>
  );
};

export default Project;
