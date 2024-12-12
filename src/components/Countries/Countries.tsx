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
    description: "Singapore: A global financial hub with stunning cityscapes and a place where I was born. It has a lot of diverse people with rich knowledge, and the country is none other than Singapore.",
  },
  {
    id: "IND",
    name: "India",
    coords: [78.9629, 20.5937],
    imageUrl: "https://i.ibb.co/j3CB6xW/Whats-App-Image-2024-12-05-at-21-30-52-d79d9b3c.jpg",
    description:
      "India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country in the world by area and the most populous country. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[k] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives.",
  },
  {
    id: "NOR",
    name: "Norway",
    coords: [8.4689, 60.472],
    imageUrl: "https://i.ibb.co/j3CB6xW/Whats-App-Image-2024-12-05-at-21-30-52-d79d9b3c.jpg",
    description: "Norway: Known for its stunning fjords and northern lights.",
  },
  {
    id: "USA",
    name: "United States",
    coords: [-95.7129, 37.0902],
    imageUrl: "https://i.ibb.co/j3CB6xW/Whats-App-Image-2024-12-05-at-21-30-52-d79d9b3c.jpg",
    description: "USA: The land of opportunities and iconic landmarks.",
  },
  {
    id: "OMN",
    name: "Oman",
    coords: [55.9231, 21.4225],
    imageUrl: "https://i.ibb.co/j3CB6xW/Whats-App-Image-2024-12-05-at-21-30-52-d79d9b3c.jpg",
    description: "Oman: A beautiful blend of desert, beaches, and mountains.",
  },
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
    <div className={styles.mapContainer}>
      <MaxWidthWrapper><ConstrainedTitle style={{marginBottom : 0 }}side="left">Countries Visited</ConstrainedTitle></MaxWidthWrapper>
      
      <div className={styles.mapWrapper}>
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
