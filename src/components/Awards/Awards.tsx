import { ConstrainedTitle } from "@/components/SectionTitle";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "./Awards.module.css";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const awardsData = [
  {
    title: "Outstanding Leader in Higher Education",
    description: "Recipient of 'Outstanding Leader in Higher Education' Award for the year 2022 by 14th elets Higher Education Summit, Chennai.",
    image: "https://sonatechac-my.sharepoint.com/:i:/r/personal/ashrafunisha_sonatech_ac_in/Documents/Attachments/Outstanding%20Leader%20in%20Higher%20Education%20Award%202022.jpg?csf=1&web=1&e=aadUhi",
  },
  {
    title: "Digital Leaders",
    description: "Recipient of 'Digital Leaders' Award for the year 2021 by Infosys Campus Connect Conclave – Principal’s Meet 2021.",
    image: "https://i.ibb.co/7dBfVR2Q/Screenshot-2025-01-30-195854.png",
  },
  {
    title: "Innovative Educator Award",
    description: "Honored with the 'Innovative Educator Award' for outstanding contributions to technology-driven education.",
    image: "/images/award3.jpg",
  },
  {
    title: "Excellence in Research",
    description: "Awarded 'Excellence in Research' for pioneering studies in artificial intelligence and cybersecurity.",
    image: "https://sonatechac-my.sharepoint.com/:i:/r/personal/ashrafunisha_sonatech_ac_in/Documents/Attachments/Award%20of%20Excellence_Indian%20Technology%20Congress.jpeg?csf=1&web=1&e=C7CpQy",
  },
  {
    title: "Best Academic Leader",
    description: "Recognized as 'Best Academic Leader' for transformational leadership in higher education.",
    image: "/images/award5.jpg",
  },
  {
    title: "Tech Visionary Award",
    description: "Received the 'Tech Visionary Award' for significant contributions to technological advancements in academia.",
    image: "/images/award6.jpg",
  },
  {
    title: "Global Educator of the Year",
    description: "Awarded 'Global Educator of the Year' for contributions to international collaborations in education.",
    image: "https://sonatechac-my.sharepoint.com/:i:/r/personal/ashrafunisha_sonatech_ac_in/Documents/Attachments/ISTE%20Best%20Student%20Chapter%20Award%20received%20by%20our%20Principal%20Dr.%20S.%20R.%20R.%20Senthilkumar.jpg?csf=1&web=1&e=Gz1goY",
  },
  {
    title: "Outstanding Researcher Award",
    description: "Honored with the 'Outstanding Researcher Award' for innovative research in digital security.",
    image: "/images/award8.jpg",
  },
  {
    title: "Leadership in Digital Transformation",
    description: "Recipient of the 'Leadership in Digital Transformation' award for spearheading digital initiatives in education.",
    image: "/images/award9.jpg",
  },
  {
    title: "Pioneer in Cybersecurity Education",
    description: "Recognized as a 'Pioneer in Cybersecurity Education' for contributions to cyber awareness programs.",
    image: "/images/award10.jpg",
  },
  {
    title: "Innovation in Teaching Excellence",
    description: "Received 'Innovation in Teaching Excellence' for revolutionizing learning methodologies.",
    image: "/images/award11.jpg",
  },
];

const Awards: React.FC = () => {
  const [selectedAward, setSelectedAward] = useState<{ title: string; description: string; image: string } | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 2; // Adjust scroll speed for smoother scrolling

    const scroll = () => {
      if (scrollContainer) {
        // Calculate the maximum scrollable width
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

        if (scrollContainer.scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft = 0; // Reset to the start
        } else {
          scrollContainer.scrollLeft += scrollSpeed;
        }
      }
    };

    const interval = setInterval(scroll, 20); // Adjust interval for smoother scrolling
    return () => clearInterval(interval);
  }, []);

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