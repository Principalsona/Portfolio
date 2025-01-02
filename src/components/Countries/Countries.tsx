import React, { useState } from "react";
import { ConstrainedTitle } from "@/components/SectionTitle";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import Image from "next/image";
import styles from "./Countries.module.css";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const highlightedCountries = [
  {
    id: "SGP",
    name: "Singapore",
    coords: [103.82, 1.352],
    imageUrl: "https://i.ibb.co/j3CB6xW/Whats-App-Image-2024-12-05-at-21-30-52-d79d9b3c.jpg",
    description: "I visited the National University of Singapore (NUS) in August 2004 to engage in academic discussions and explore potential research collaborations. NUS is a world-class institution, known for its focus on research and innovation in various fields, including engineering and technology."
  },
  {
    id: "IND",
    name: "India",
    coords: [78.9629, 20.5937],
    imageUrl: "https://i.ibb.co/j3CB6xW/Whats-App-Image-2024-12-05-at-21-30-52-d79d9b3c.jpg",
    description: "In 2017, I was honored with the 'Best ISTE Chapter Chairman' Award by the Tamil Nadu Section of the Indian Society for Technical Education (ISTE), New Delhi. This recognition was awarded for my leadership and contributions to enhancing the activities and growth of the ISTE chapter during my tenure."
  },
  {
    id: "THA",
    name: "Thailand",
    coords: [100.5018, 13.7563],
    imageUrl: "https://i.ibb.co/j3CB6xW/Whats-App-Image-2024-12-05-at-21-30-52-d79d9b3c.jpg",
    description: "In February 2014, I visited Phetchburi Rajabhat University and Thammasat University in Thailand to discuss academic collaboration and research initiatives. Both universities are well-regarded for their focus on practical and applied education, particularly in the fields of engineering and social sciences."
  },
  {
    id: "KOR",
    name: "South Korea",
    coords: [127.7666, 35.9077],
    imageUrl: "https://i.ibb.co/j3CB6xW/Whats-App-Image-2024-12-05-at-21-30-52-d79d9b3c.jpg",
    description: "In South Korea, I visited several institutions, including Hanyang University, Dong Pusan Engineering College, and the UNHUWA Stem Cell Research Centre in July 2014, to explore potential academic collaborations and research initiatives."
  },
  {
    id: "UAE",
    name: "United Arab Emirates",
    coords: [54.3773, 24.4539],
    imageUrl: "https://i.ibb.co/j3CB6xW/Whats-App-Image-2024-12-05-at-21-30-52-d79d9b3c.jpg",
    description: "In the UAE, I engaged with the American University and attended the Big 5 International Construction Fair in Dubai in December 2007, as well as visited the University of Sharjah in December 2006, focusing on research partnerships and academic exchanges."
  },
  {
    id: "OMN",
    name: "Oman",
    coords: [55.9231, 21.4225],
    imageUrl: "https://i.ibb.co/j3CB6xW/Whats-App-Image-2024-12-05-at-21-30-52-d79d9b3c.jpg",
    description: "Between 2006 and 2008, I visited Sultan Qaboos University for research discussions and library visits, focusing on academic collaboration. Sultan Qaboos University is a leading educational institution in Oman, known for its research-driven approach to higher education."
  },
  {
    id: "GBR",
    name: "United Kingdom",
    coords: [-3.435973, 55.378051],
    imageUrl: "https://i.ibb.co/j3CB6xW/Whats-App-Image-2024-12-05-at-21-30-52-d79d9b3c.jpg",
    description: "During my visit to the United Kingdom in October 2022, I engaged with officials from leading universities like Oxford, Cambridge, and Manchester to discuss potential research collaborations. These universities are globally recognized for their academic excellence, particularly in science, engineering, and humanities."
  }
];

const MapChart = () => {
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

  return (
    <div id="Countries" className={styles.mapContainer}>
      <div className={styles.mapWrapper}>
        <ConstrainedTitle style={{ marginBottom: 0 }} side="left">
          Countries Visited
        </ConstrainedTitle>
        <ComposableMap>
          <Geographies geography="/feature.json">
            {({ geographies }) =>
              geographies.map((geo) => {
                const isHighlighted = highlightedCountries.some((country) => country.id === geo.id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: isHighlighted ? "var(--color-primary)" : "var(--color-text-light)",
                        outline: "none",
                      },
                      hover: {
                        fill: "var(--color-primary-hover)",
                        outline: "none",
                      },
                      pressed: {
                        fill: "var(--color-primary)",
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
          {highlightedCountries.map(({ id, name, coords, imageUrl, description }) => (
            <Marker key={id} coordinates={coords as [number, number]}>
              <circle
                r={10}
                fill="white"
                stroke="black"
                strokeWidth={2}
                onClick={() => handleMarkerClick(name, imageUrl, description)}
                style={{ cursor: "pointer" }}
              />
            </Marker>
          ))}
        </ComposableMap>

        {popupOpen && (
          <div className={styles.popup} onClick={handleClosePopup}>
            <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
              <Image
                src={popupData.imageUrl}
                alt={`${popupData.name} Image`}
                width={350}
                height={350}
                className={styles.popupImage}
                layout="intrinsic"
              />
              <h3 className={styles.link}>{popupData.name}</h3>
              <p className={styles.description}>{popupData.description}</p>
              <button className={styles.closeButton} onClick={handleClosePopup}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapChart;
