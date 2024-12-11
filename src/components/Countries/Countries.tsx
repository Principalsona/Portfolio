import React, { useState } from "react";
import { ConstrainedTitle } from "@/components/SectionTitle";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import Image from "next/image";
import styles from "./Countries.module.css";

const highlightedCountries = [
  { id: "SGP", coords: [103.82, 1.352], imageUrl: "https://i.ibb.co/j3CB6xW/Whats-App-Image-2024-12-05-at-21-30-52-d79d9b3c.jpg", description: "Singapore: A global financial hub with stunning cityscapes and it a place where i born and it has lot of diverse people with lots of knowledge." },
  { id: "IND", coords: [78.9629, 20.5937], imageUrl: "https://i.ibb.co/j3CB6xW/Whats-App-Image-2024-12-05-at-21-30-52-d79d9b3c.jpg", description: "India: A land of diverse cultures and heritage." },
  { id: "NOR", coords: [8.4689, 60.472], imageUrl: "https://i.ibb.co/j3CB6xW/Whats-App-Image-2024-12-05-at-21-30-52-d79d9b3c.jpg", description: "Norway: Known for its stunning fjords and northern lights." },
  { id: "USA", coords: [-95.7129, 37.0902], imageUrl: "https://i.ibb.co/j3CB6xW/Whats-App-Image-2024-12-05-at-21-30-52-d79d9b3c.jpg", description: "USA: The land of opportunities and iconic landmarks." },
  { id: "OMN", coords: [55.9231, 21.4225], imageUrl: "https://i.ibb.co/j3CB6xW/Whats-App-Image-2024-12-05-at-21-30-52-d79d9b3c.jpg", description: "Oman: A beautiful blend of desert, beaches, and mountains." },
];

const MapChart = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState<{ imageUrl: string; description: string }>({ imageUrl: "", description: "" });

  const handleMarkerClick = (imageUrl: string, description: string) => {
    setPopupData({ imageUrl, description });
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    setPopupData({ imageUrl: "", description: "" });
  };

  return (
    <div className={styles.mapContainer}>
      <ConstrainedTitle side="left">Countries Visited</ConstrainedTitle>
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
          {highlightedCountries.map(({ id, coords, imageUrl, description }) => (
            <Marker key={id} coordinates={coords as [number, number]}>
              <circle
                r={10}
                fill="white"
                stroke="black"
                strokeWidth={2}
                onClick={() => handleMarkerClick(imageUrl, description)}
                style={{ cursor: "pointer" }}
              />
            </Marker>
          ))}
        </ComposableMap>

        {popupOpen && (
          <div className={styles.popup} onClick={handleClosePopup}>
            <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
              <span className={styles.closeButton} onClick={handleClosePopup}>
                &times;
              </span>
              <Image
                src={popupData.imageUrl}
                alt="Country Popup"
                width={400}
                height={300}
                className={styles.popupImage}
                layout="intrinsic"
              />
              <p className={styles.description}>{popupData.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapChart;
