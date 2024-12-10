import React, { useState } from "react";
import { ConstrainedTitle } from "@/components/SectionTitle";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import './Countries.module.css'; // Import your CSS file for styles

const highlightedCountries = [
  { id: "SGP", coords: [103.82, 1.352], imageUrl: "https://i.ibb.co/j3CB6xW/Whats-App-Image-2024-12-05-at-21-30-52-d79d9b3c.jpg" },
  { id: "IND", coords: [78.9629, 20.5937], imageUrl: "https://i.ibb.co/j3CB6xW/Whats-App-Image-2024-12-05-at-21-30-52-d79d9b3c.jpg" },
  { id: "NOR", coords: [8.4689, 60.4720], imageUrl: "https://i.ibb.co/j3CB6xW/Whats-App-Image-2024-12-05-at-21-30-52-d79d9b3c.jpg" },
  { id: "USA", coords: [ -95.7129, 37.0902], imageUrl: "https://i.ibb.co/j3CB6xW/Whats-App-Image-2024-12-05-at-21-30-52-d79d9b3c.jpg" },
  { id: "OMN", coords: [55.9231, 21.4225], imageUrl: "https://i.ibb.co/j3CB6xW/Whats-App-Image-2024-12-05-at-21-30-52-d79d9b3c.jpg" },
];

const MapChart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedImage("");
  };

  return (
    <div>
    <ConstrainedTitle side="left">Countries Visited</ConstrainedTitle>
      <ComposableMap>
        <Geographies geography="/feature.json">
          {({ geographies }) =>
            geographies.map((geo) => {
              const isHighlighted = highlightedCountries.some(country => country.id === geo.id);
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
                      fill: isHighlighted ? "var(--color-primary)" : "var(--color-primary)",
                      outline: "none",
                    },
                    pressed: {
                      fill: isHighlighted ? "var(--color-primary)" : "var(--color-text-light)",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>

        {highlightedCountries.map(({ id, coords, imageUrl }) => (
          <Marker key={id} coordinates={coords}>
            <image
            onClick={() => handleImageClick(imageUrl)}
              href={imageUrl}
              height={30} // Adjust size as needed
              width={30} // Adjust size as needed
              className="circular-image"
              
            />
          </Marker>
        ))}
      </ComposableMap>

      {isOpen && (
        <div className="popup" onClick={handleClose}>
          <span className="close">&times;</span>
          <img src={selectedImage} alt="Popup" className="popup-image" />
        </div>
      )}
    </div>
  );
};

export default MapChart;