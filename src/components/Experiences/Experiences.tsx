import { ConstrainedTitle } from "@/components/SectionTitle";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "./Experiences.module.css";
import Image from "next/image";

const Experiences: React.FC = () => {
  return (
    <div id="Experiences" className={styles.experiences}>
      <MaxWidthWrapper>
        <ConstrainedTitle side="left">Experiences</ConstrainedTitle>
        <div className={styles.items}>
          <div className={styles.timeline} />

          <div className={styles.item}>
            <Image
              className={styles.image}
              height={100}
              width={100}
              src="/Experiance/sonalogo.jpg"
              alt="Sona College of Technology"
            />
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore} />
            </div>
            <div className={styles.connector} />
            <div className={styles.info}>
              <p className={styles.time}>Jan 2018 - Present</p>
              <h4 className={styles.company}>Sona College of Technology</h4>
              <h4 className={styles.role}>Principal</h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Leading academic and administrative operations, ensuring the institutions growth and development in technology education.<br />
                ⦿ &nbsp; &nbsp; Driving collaborations with industry leaders to align education with emerging technologies.
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <Image
              className={styles.image}
              height={100}
              width={100}
              src="/Experiance/agni.png"
              alt="Agni College of Technology"
            />
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore} />
            </div>
            <div className={styles.connector} />
            <div className={styles.info}>
              <p className={styles.time}>Feb 2012 - Jan 2018</p>
              <h4 className={styles.company}>Agni College of Technology</h4>
              <h4 className={styles.role}>Principal</h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Directed institutional planning and quality improvement initiatives for student success.<br />
                ⦿ &nbsp; &nbsp; Implemented innovative teaching methodologies to enhance learning outcomes.
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <Image
              className={styles.image}
              height={100}
              width={100}
              src="/Experiance/PPg.jpg"
              alt="PPG Institute of Technology"
            />
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore} />
            </div>
            <div className={styles.connector} />
            <div className={styles.info}>
              <p className={styles.time}>Jun 2008 - Feb 2012</p>
              <h4 className={styles.company}>PPG Institute of Technology</h4>
              <h4 className={styles.role}>Principal</h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Enhanced curriculum with industry-relevant content for technical education.<br />
                ⦿ &nbsp; &nbsp; Championed research initiatives leading to increased publications and patents.
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <Image
              className={styles.image}
              height={100}
              width={100}
              src="/Experiance/Higher.jpg"
              alt="Higher College of Technology"
            />
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore} />
            </div>
            <div className={styles.connector} />
            <div className={styles.info}>
              <p className={styles.time}>Oct 2005 - May 2008</p>
              <h4 className={styles.company}>Higher College of Technology</h4>
              <h4 className={styles.role}>Head of Section and Registrar</h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Supervised departmental operations to ensure academic excellence.<br />
                ⦿ &nbsp; &nbsp; Coordinated scheduling and resource allocation for optimal performance.
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <Image
              className={styles.image}
              height={100}
              width={100}
              src="/Experiance/tamil.jpg"
              alt="Tamilnadu College of Engineering"
            />
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore} />
            </div>
            <div className={styles.connector} />
            <div className={styles.info}>
              <p className={styles.time}>Various Roles (1985 - 2005)</p>
              <h4 className={styles.company}>Tamilnadu College of Engineering</h4>
              <h4 className={styles.role}>Various Positions (Senior Lecturer, Assistant Professor, Draughtsman, etc.)</h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Mentored students across engineering disciplines, contributing to academic success.<br />
                ⦿ &nbsp; &nbsp; Conducted research and published papers on emerging engineering topics.
              </p>
            </div>
          </div>

          {/* <div className={styles.item}>
            <Image
              className={styles.image}
              height={100}
              width={100}
              src="/images/draughtsman.jpeg"
              alt="Draughtsman"
            />
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore} />
            </div>
            <div className={styles.connector} />
            <div className={styles.info}>
              <p className={styles.time}>Aug 1985 - Jun 1990</p>
              <h4 className={styles.company}>Tamilnadu College of Engineering</h4>
              <h4 className={styles.role}>Draughtsman</h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Prepared detailed engineering drawings for civil and mechanical projects.<br />
                ⦿ &nbsp; &nbsp; Assisted in project documentation and technical report generation.
              </p>
            </div>
          </div> */}

          <div className={styles.item}>
            <Image
              className={styles.image}
              height={100}
              width={100}
              src="/Experiance/Ts.jpg"
              alt="Instructor"
            />
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore} />
            </div>
            <div className={styles.connector} />
            <div className={styles.info}>
              <p className={styles.time}>Aug 1984 - Aug 1985</p>
              <h4 className={styles.company}>T.S. Dhandapani ITI</h4>
              <h4 className={styles.role}>Instructor</h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Conducted vocational training for students in industrial technical skills.<br />
                ⦿ &nbsp; &nbsp; Developed training materials to ensure effective skill development.
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <Image
              className={styles.image}
              height={100}
              width={100}
              src="/Experiance/thermal.jpg"
              alt="Site Engineer"
            />
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore} />
            </div>
            <div className={styles.connector} />
            <div className={styles.info}>
              <p className={styles.time}>Mar 1984 - Jul 1984</p>
              <h4 className={styles.company}>Thermal Power Station, Mettur</h4>
              <h4 className={styles.role}>Site Engineer</h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Oversaw on-site construction activities and ensured project adherence to designs.<br />
                ⦿ &nbsp; &nbsp; Coordinated with teams to manage timelines and resource utilization.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Experiences;
