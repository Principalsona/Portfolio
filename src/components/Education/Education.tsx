import College from "@/components/College";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ConstrainedTitle } from "@/components/SectionTitle";
import styles from "./Education.module.css";

const COLLEGES = [
  {
    "degree": "DOCTOR OF PHILOSOPHY IN CIVIL ENGINEERING (Ph.D.)",
    "school": "P.S.G. College of Technology",
    "courses": [
      "Advanced Structural Engineering",
      "Geotechnical Analysis",
      "Hydrology and Water Resources Engineering",
      "Environmental Impact Assessment",
      "Research Methodologies in Civil Engineering"
    ],
    "year": "Year of Completion: 2004",
    "imgSrc": "../education/PSG.png"
  },
  {
    "degree": "MASTER OF CIVIL ENGINEERING",
    "school": "P.S.G. College of Technology",
    "courses": [
      "Structural Dynamics",
      "Advanced Concrete Technology",
      "Transportation Engineering",
      "Finite Element Methods",
      "Construction Project Management"
    ],
    "year": "Year of Completion: 1993",
    "imgSrc": "../education/psg1.jpg"
  },
  {
    "degree": "BACHELOR OF CIVIL ENGINEERING",
    "school": "GCT of Coimbatore",
    "courses": [
      "Surveying",
      "Fluid Mechanics",
      "Strength of Materials",
      "Transportation Engineering",
      "Design of Steel Structures"
    ],
    "year": "Year of Completion: 1990",
    "imgSrc": "../education/gct.jpg"
  },
  {
    "degree": "DIPLOMA IN CIVIL ENGINEERING",
    "school": "V.L.B.J. Polytechnic College",
    "courses": [
      "Building Materials",
      "Basic Surveying",
      "Construction Technology",
      "Irrigation Engineering",
      "Estimating and Costing"
    ],
    "year": "Year of Completion: 1984",
    "imgSrc": "../education/VLBJ.jpg"
  }
  
];

const Education: React.FC = () => {
  return (
    <div id="Education" className={styles.education}>
      <MaxWidthWrapper>
        <ConstrainedTitle side="left">Education</ConstrainedTitle>
        <div className={styles.collegeList}>
          <College {...COLLEGES[0]} side="left" />
          <College {...COLLEGES[1]} side="right" />
          <College {...COLLEGES[2]} side="left" />
          <College {...COLLEGES[3]} side="right" />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Education;
