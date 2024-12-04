import {
  AiFillInstagram,
  AiOutlineCodepen,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import styles from "./Socials.module.css";
import clsx from "clsx";

const enum ESocials {
    INSTAGRAM_URL = "https://www.instagram.com/srr_senthilkumar?igsh=MW51M3RpOGl2cGRyMw==",
    TWITTER_URL = "https://x.com/SenthilkumarSrr?t=sqnKa5BlU1OkeRYuzZgBiA&s=08",
    LINKEDIN_URL = "https://www.linkedin.com/in/dr-senthilkumar-s-r-r?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
}

export const SocialIcons: React.FC = () => {
  return (
    <>
      <IconLink
        className={styles.iconLink}
        href={ESocials.INSTAGRAM_URL}
        target="_blank"
      >
        <AiFillInstagram />
      </IconLink>
      <IconLink
        className={styles.iconLink}
        href={ESocials.TWITTER_URL}
        target="_blank"
      >
        <AiOutlineTwitter />
      </IconLink>
      <IconLink
        className={styles.iconLink}
        href={ESocials.LINKEDIN_URL}
        target="_blank"
      >
        <FaLinkedinIn />
      </IconLink>
    </>
  );
};

type IconLinkProps = React.ComponentProps<typeof Link>;

export const IconLink = ({
  children,
  className,
  ...delegated
}: IconLinkProps) => {
  return (
    <Link className={clsx(styles.iconLink, className)} {...delegated}>
      {children}
    </Link>
  );
};

const Socials: React.FC = () => {
  return (
    <address className={styles.socials}>
      <SocialIcons />
      <div className={styles.line} />
    </address>
  );
};

export default Socials;
