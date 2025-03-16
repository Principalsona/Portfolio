import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Awards.module.css";
import { ConstrainedTitle } from "@/components/SectionTitle";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

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

const Awards = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [popupData, setPopupData] = useState<{ title: string; description: string; image: string } | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 300;
        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += direction === "left" ? -300 : 300;
    }
  };

  const handleReadMore = (award: { title: string; description: string; image: string }) => {
    setPopupData(award);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setPopupData(null);
  };

  return (
    <div id="Awards" className={styles.experiences}>
      <MaxWidthWrapper>
        <ConstrainedTitle side="left">Awards</ConstrainedTitle>
      <div className={styles.scrollContainer}>
        <button className={styles.navButton} onClick={() => scroll("left")}>
          &#8592;
        </button>
        <div className={styles.items} ref={scrollRef}>
          {awardsData.map((award, index) => (
            <div key={index} className={styles.card}>
              <Image
                src={award.image}
                alt={award.title}
                width={200}
                height={150}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{award.title}</h3>
                <p className={styles.cardDescription}>
                  {award.description.length > 100 ? `${award.description.substring(0, 100)}...` : award.description}
                </p>
                {award.description.length > 100 && (
                  <button className={styles.readMoreButton} onClick={() => handleReadMore(award)}>Read More</button>
                )}
              </div>
            </div>
          ))}
        </div>
        <button className={styles.navButton} onClick={() => scroll("right")}>
          &#8594;
        </button>
      </div>
      </MaxWidthWrapper>
      {isPopupOpen && popupData && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
          <div className={styles.popupScroll}>
            <Image src={popupData.image} alt={popupData.title} width={300} height={200} className={styles.popupImage} />
            <h3 className={styles.popupTitle}>{popupData.title}</h3>
            <p className={styles.popupDescription}>{popupData.description}</p>
            <button className={styles.closeButton} onClick={handleClosePopup}>Close</button>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Awards;
