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
    description: "\n- National University of Singapore, August 2004.\n- Nanyang University of Singapore, August 2004."
  },
  {
    id: "IND",
    name: "India",
    coords: [78.9629, 20.5937],
    imageUrl: "https://i.ibb.co/j3CB6xW/Whats-App-Image-2024-12-05-at-21-30-52-d79d9b3c.jpg",
    description: "\n- Recipient of 'Best ISTE Chapter Chairman' Award for the year 2017 by Tamilnadu Section, Indian Society for Technical Education, New Delhi."
  },
  {
    id: "THA",
    name: "Thailand",
    coords: [100.5018, 13.7563],
    imageUrl: "https://i.ibb.co/j3CB6xW/Whats-App-Image-2024-12-05-at-21-30-52-d79d9b3c.jpg",
    description: "\n- Phetchburi Rajabhat University and Thammasat University, February 2014."
  },
  {
    id: "KOR",
    name: "South Korea",
    coords: [127.7666, 35.9077],
    imageUrl: "https://i.ibb.co/j3CB6xW/Whats-App-Image-2024-12-05-at-21-30-52-d79d9b3c.jpg",
    description: "\n- Kori Nuclear Power Plant, July 7, 2014.\n- Hanyang University, July 2014.\n- Dong Pusan Engineering College, July 2014.\n- UNHUWA Stem Cell Research Centre, July 2014.\n- Malawi University of Business and Applied Sciences, Siantou University, Santo Tomas College of Agriculture, and National University of Lesotho, July 2023."
  },
  {
    id: "UAE",
    name: "United Arab Emirates",
    coords: [54.3773, 24.4539],
    imageUrl: "https://i.ibb.co/j3CB6xW/Whats-App-Image-2024-12-05-at-21-30-52-d79d9b3c.jpg",
    description: "\n- University of Sharjah, December 2006.\n- American University and Big 5 International Construction Fair, December 2007."
  },
  {
    id: "OMN",
    name: "Oman",
    coords: [55.9231, 21.4225],
    imageUrl: "https://i.ibb.co/j3CB6xW/Whats-App-Image-2024-12-05-at-21-30-52-d79d9b3c.jpg",
    description: "\n- Acting Head of Civil & Architectural Engineering Section, HCT, 2005 – 2008.\n- Sultan Qaboos University for Research discussions and Library Visits, 2006 – 2008."
  },
  {
    id: "GBR",
    name: "United Kingdom",
    coords: [-3.435973, 55.378051],
    imageUrl: "https://i.ibb.co/j3CB6xW/Whats-App-Image-2024-12-05-at-21-30-52-d79d9b3c.jpg",
    description: "\n- University of Oxford, University of Strathclyde Glasgow, Nottingham Trent University, University of Manchester, University of Liverpool, and University of Cambridge, October 2022."
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
