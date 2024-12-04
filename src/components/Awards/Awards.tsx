import { ConstrainedTitle } from "@/components/SectionTitle";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "./Awards.module.css";
import Image from "next/image";

const Awards: React.FC = () => {
  return (
    <div id="Awards" className={styles.experiences}>
      <MaxWidthWrapper>
        <ConstrainedTitle side="left">Awards</ConstrainedTitle>
        <div className={styles.items}>
          <div className={styles.timeline}/>
          <div className={styles.item}>
            
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore}/>
            </div>
            <div className={styles.connector}/>
            <div className={styles.info}>
              <h4 className={styles.company}>Outstanding Leader in Higher Education</h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Recipient of “Outstanding Leader in Higher Education” Award for the year 2022 by 14th elets Higher Education Summit, Chennai. <br></br>
              </p>
            </div>
          </div>

          <div className={styles.item}>
            
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore}/>
            </div>
            <div className={styles.connector}/>
            <div className={styles.info}>
              <h4 className={styles.company}>Digital Leaders</h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Recipient of “Digital Leaders” Award for the year 2021 by Infosys Campus Connect Conclave – Principal’s Meet 2021. <br></br>
              </p>
            </div>
          </div>

          <div className={styles.item}>
            
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore}/>
            </div>
            <div className={styles.connector}/>
            <div className={styles.info}>
              <h4 className={styles.company}>ISTE Best Engineering College Principal</h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Recipient of “ISTE Best Engineering College Principal” Award for the year 2018 by 48th Indian Society for Technical Education, Belagavi (Karnataka). <br></br>
              </p>
            </div>
          </div>

          <div className={styles.item}>
            
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore}/>
            </div>
            <div className={styles.connector}/>
            <div className={styles.info}>
              <h4 className={styles.company}>Best ISTE Chapter Chairman</h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Recipient of  “Best ISTE Chapter Chairman” Award for the year 2017 by Tamilnadu Section, Indian Society for Technical Education, New Delhi.  <br></br>
              </p>
            </div>
          </div>

          <div className={styles.item}>
            
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore}/>
            </div>
            <div className={styles.connector}/>
            <div className={styles.info}>
              <h4 className={styles.company}>Award of Excellence</h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Recipient of “Award of Excellence” for the significant contributions towards the development of higher education and research during Indian Technology Congress’16. <br></br>
              </p>
            </div>
          </div>

          <div className={styles.item}>
            
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore}/>
            </div>
            <div className={styles.connector}/>
            <div className={styles.info}>
              <h4 className={styles.company}>Edu Creators</h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Recipient of “Edu Creators” Award from SAI Creators, India, during Teachers’ Day Celebrations on 25th September 2015 held at Chennai <br></br>
              </p>
            </div>
          </div>

          <div className={styles.item}>
            
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore}/>
            </div>
            <div className={styles.connector}/>
            <div className={styles.info}>
              <h4 className={styles.company}>Research Excellence</h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Recipient of “Research Excellence” Award from Indus Foundation, USA, during Indo-Global Education Summit 2013. <br></br>
              </p>
            </div>
          </div>

          <div className={styles.item}>
            
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore}/>
            </div>
            <div className={styles.connector}/>
            <div className={styles.info}>
              <h4 className={styles.company}>Recognized for inclusion of my biography </h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Recognized for inclusion of my biography in the 2012 edition of Marquis’ Who’s Who in the World, a globally distributed publication continues to be recognized internationally as the premier biographical data source of notable living individuals from every significant field of endeavor. <br></br>
              </p>
            </div>
          </div>

          <div className={styles.item}>
            
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore}/>
            </div>
            <div className={styles.connector}/>
            <div className={styles.info}>
              <h4 className={styles.company}>Rashtriya Vidya Saraswati Puraskar</h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Recipient of “Rashtriya Vidya Saraswati Puraskar” award for the outstanding achievement in the field of Education from International Institute of Education and Management, New Delhi, for the year 2010. <br></br>
              </p>
            </div>
          </div>

          <div className={styles.item}>
            
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore}/>
            </div>
            <div className={styles.connector}/>
            <div className={styles.info}>
              <h4 className={styles.company}>Life Time Achievement award and Gold Medal</h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Recipient of “Life Time Achievement award and Gold Medal” for the outstanding achievement in the field of Education from Indian solidarity Council, New Delhi, for the year 2010. <br></br>
              </p>
            </div>
          </div>

          <div className={styles.item}>
            
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore}/>
            </div>
            <div className={styles.connector}/>
            <div className={styles.info}>
              <h4 className={styles.company}>certificate for excellence</h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Meritorious certificate for excellence in teaching by PARK Group of Institutions, Coimbatore during 1997-1998, 1998-1999, & 1999-2000 <br></br>
              </p>
            </div>
          </div>

        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Awards;
