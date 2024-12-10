import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ConstrainedTitle } from "@/components/SectionTitle";
import styles from "./Countries.module.css"; // Import the CSS module

const highlightedCountries = ["SGP", "IND", "NOR", "AND", "USA", "FIN", "OMN"]; // Country IDs to highlight

const MapChart: React.FC = () => (
  <div className={styles.mapContainer}>
    <MaxWidthWrapper>
      <ConstrainedTitle side="left">Countries Visited</ConstrainedTitle> {/* Title */}
      <ComposableMap 
        className={styles.map} 
        style={{ width: "1200px" }} // Set width to 1200px using inline CSS
      >
        <Geographies geography="/feature.json">
          {({ geographies }) =>
            geographies.map((geo) => {
              console.log(geo.id); // Log the ID of each geography
              const isHighlighted = highlightedCountries.includes(geo.id);
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
      </ComposableMap>
    </MaxWidthWrapper>
  </div>
);

export default MapChart;