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
    description: "Recipient of “ISTE Best Engineering College Principal” Award for the year 2018 by 48th Indian Society for Technical Education, Karnataka.",
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
    title: "Marquis Who's Who",
    description: "Recognized for inclusion in the 2012 edition of Marquis' Who's Who in the World, a leading global biographical publication of notable individuals across various fields.",
    image: "../awards/",
  },
  {
    title: "Rashtriya Vidya Saraswati Puraskar",
    description: "Recipient of “Rashtriya Vidya Saraswati Puraskar” award for the outstanding achievement in the field of Education from IIE and Management, New Delhi.",
    image: "../awards/Receiving Rashtriya Vidhya Award from GVG Krishnamurhty, Election Commissioner of India.jpg",
  },
  {
    title: "Life Time Achievement award",
    description: "Recipient of “Life Time Achievement award and Gold Medal” for the outstanding achievement in the field of Education from Indian solidarity Council, New Delhi.",
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
  const [popupOpen, setPopupOpen] = useState(false);
    const [popupData, setPopupData] = useState<{ imageUrl: string; description: string; name: string }>({
      imageUrl: "",
      description: "",
      name: "",
    });
  
    const handleMarkerClick = (name: string, imageUrl: string, description: string) => {
      setPopupData({ name, imageUrl, description });
      setPopupOpen(true);
    };
  
    const handleClosePopup = () => {
      setPopupOpen(false);
      setPopupData({ name: "", imageUrl: "", description: "" });
    };

  // // Function to scroll left
  // const scrollLeft = () => {
  //   if (scrollRef.current) {
  //     scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  //   }
  // };

  // // Function to scroll right
  // const scrollRight = () => {
  //   if (scrollRef.current) {
  //     scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  //   }
  // };

  // // Auto-scroll logic with alternating direction
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (scrollRef.current) {
  //       if (scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth) {
  //         scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
  //       } else {
  //         scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  //       }
  //     }
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div id="Awards" className={styles.experiences}>
      <MaxWidthWrapper>
        <ConstrainedTitle side="left">Awards</ConstrainedTitle>
        <div className={styles.controls}>
          {/* Left Scroll Button */}
          {/* <button className={styles.navButton} onClick={scrollLeft}>
            ❮
          </button> */}
          
          {/* Scrollable Container */}
          <div className={styles.scrollContainer} ref={scrollRef}>
            <div className={styles.items}>
              {awardsData.map((award, index) => (
                <div key={index} className={styles.card} onClick={() => setSelectedAward(award)}>
                  <Image src={award.image} alt={award.title} width={100} height={100} className={styles.cardImage} />                  <h4 className={styles.company}>{award.title}</h4>
                  <p className={styles.description}>{award.description}</p>
                  <button className={styles.viewButton} onClick={() => setSelectedAward(award)}>View Award</button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Scroll Button */}
          {/* <button className={styles.navButton} onClick={scrollRight}>
            ❯
          </button> */}
        </div>
      </MaxWidthWrapper>

      {/* Award Popup */}
      {selectedAward && (
        <div className={styles.popup} onClick={handleClosePopup}>
          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
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