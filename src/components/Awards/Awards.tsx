import { ConstrainedTitle } from "@/components/SectionTitle";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "./Awards.module.css";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const awardsData = [
  {
    title: "Outstanding Leader in Higher Education",
    description: "Recipient of 'Outstanding Leader in Higher Education' Award for the year 2022 by 14th elets Higher Education Summit, Chennai.",
    image: "../awards/Outstanding Leader in Higher Education Award 2022.jpg",
  },
  {
    title: "Digital Leaders",
    description: "Recipient of 'Digital Leaders' Award for the year 2021 by Infosys Campus Connect Conclave – Principal’s Meet 2021.",
    image: "../awards/Dr. S R R Senthil Kumar_Infosys Certificate.png",
  },
  {
    title: "ISTE Best Engineering College Principal",
    description: "Recipient of “ISTE Best Engineering College Principal” Award for the year 2018 by 48th Indian Society for Technical Education, Belagavi (Karnataka).",
    image: "../awards/ISTE Best Student Chapter Award received by our Principal Dr. S. R. R. Senthilkumar.jpg"
  },
  {
    title: "Best ISTE Chapter Chairman",
    description: "Recipient of  “Best ISTE Chapter Chairman” Award for the year 2017 by Tamilnadu Section, Indian Society for Technical Education, New Delhi.",
    image: "../awards/Receiving Best ISTE Chapter Chairman Award for Engineering Colleges 2017 by ISTE in 20th TN Section Annual Convention.jpg",
  },
  {
    title: "Award of Excellence",
    description: "Recipient of “Award of Excellence” for the significant contributions towards the development of higher education and research during Indian Technology Congress’16.",
    image: "../awards/Award of Excellence_Indian Technology Congress.jpeg",
  },
  {
    title: "Edu Creators",
    description: "Recipient of “Edu Creators” Award from SAI Creators, India, during Teachers’ Day Celebrations on 25th September 2015 held at Chennai.",
    image: "../awards/Edu Creatorz Award 2015.jpeg",
  },
  {
    title: "Research Excellence",
    description: "Recipient of “Research Excellence” Award from Indus Foundation, USA, during Indo-Global Education Summit 2013.",
    image: "../awards/Research Excellence Award from Indus Foundation, USA.jpg",
  },
  {
    title: "",
    description: "Recognized for inclusion of my biography in the 2012 edition of Marquis’ Who’s Who in the World, a globally distributed publication continues to be recognized internationally as the premier biographical data source of notable living individuals from every significant field of endeavor.",
    image: "../awards/",
  },
  {
    title: "Rashtriya Vidya Saraswati Puraskar",
    description: "Recipient of “Rashtriya Vidya Saraswati Puraskar” award for the outstanding achievement in the field of Education from International Institute of Education and Management, New Delhi, for the year 2010.",
    image: "../awards/Receiving Rashtriya Vidhya Award from GVG Krishnamurhty, Election Commissioner of India.jpg",
  },
  {
    title: "Life Time Achievement award and Gold Medal",
    description: "Recipient of “Life Time Achievement award and Gold Medal” for the outstanding achievement in the field of Education from Indian solidarity Council, New Delhi, for the year 2010.",
    image: "../awards/",
  },
  {
    title: "Certificate for excellence",
    description: "Meritorious certificate for excellence in teaching by PARK Group of Institutions, Coimbatore during 1997-1998, 1998-1999, & 1999-2000.",
    image: "../awards/Research Excellence Award from Indus Foundation.jpg",
  },
];

const Awards: React.FC = () => {
  const [selectedAward, setSelectedAward] = useState<{ title: string; description: string; image: string } | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   const scrollContainer = scrollRef.current;
  //   if (!scrollContainer) return;

  //   let scrollAmount = 0;
  //   const scrollSpeed = 2; // Adjust scroll speed for smoother scrolling

  //   const scroll = () => {
  //     if (scrollContainer) {
  //       // Calculate the maximum scrollable width
  //       const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

  //       if (scrollContainer.scrollLeft >= maxScroll) {
  //         scrollContainer.scrollLeft = 0; // Reset to the start
  //       } else {
  //         scrollContainer.scrollLeft += scrollSpeed;
  //       }
  //     }
  //   };

  //   const interval = setInterval(scroll, 20); // Adjust interval for smoother scrolling
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div id="Awards" className={styles.experiences}>
      <MaxWidthWrapper>
        <ConstrainedTitle side="left">Awards</ConstrainedTitle>
        <div className={styles.scrollContainer} ref={scrollRef}>
          <div className={styles.items}>
            {awardsData.map((award, index) => (
              <div key={index} className={styles.card} onClick={() => setSelectedAward(award)}>
                <h4 className={styles.company}>{award.title}</h4>
                <p className={styles.description}>{award.description}</p>
                <button className={styles.viewButton}>View Award</button>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>

      {selectedAward && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <div className={styles.popupScroll}>
              <Image src={selectedAward.image} alt={selectedAward.title} width={500} height={300} className={styles.popupImage} />
              <h3>{selectedAward.title}</h3>
              <p>{selectedAward.description}</p>
            </div>
            <button className={styles.closeButton} onClick={() => setSelectedAward(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Awards;