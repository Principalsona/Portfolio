import styles from "./Email.module.css";
import Link from "next/link";

const Email: React.FC = () => {
  return (
    <div className={styles.email}>
      <Link className={styles.link} href="mailto:srr_senthilkumar@yahoo.com">
          srr_senthilkumar@yahoo.com
      </Link>
      <div className={styles.line} />
    </div>
  );
};

export default Email;
