import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import React from "react";
import { colorScale, countries, missingCountries } from "./Countries";

function WorldMap() {
  return (
    <div style={{ margin: "auto", width: "90%", height: "90vh" }}>
      <VectorMap
        map={worldMill}
        containerStyle={{
          width: "100%",
          height: "90vh",
        }}
        backgroundColor="#ffffff"
        markers={missingCountries}
        markerStyle={{
          initial: {
            fill: "red",
          },
        }}
        series={{
          regions: [
            {
              scale: colorScale,
              values: countries,
              min: 0,
              max: 100,
              attribute: 'fill'
            },
          ],
        }}
        regionStyle={{
          initial: {
            stroke: "#000000", // Black border for each country
            "stroke-width": 1,
            "stroke-opacity": 1,
          },
        }}
        zoomOnScroll={false} // Disable scroll to zoom
        zoomButtons={false} // Disable zoom buttons
        onRegionTipShow={function reginalTip(event, label, code) {
          return label.html(`
                  <div style="background-color: black; border-radius: 6px; min-height: 50px; width: 125px; color: white; padding-left: 10px;">
                    <p><b>${label.html()}</b></p>
                    <p>${countries[code]}</p>
                  </div>`);
        }}
        onMarkerTipShow={function markerTip(event, label, code) {
          return label.html(`
                  <div style="background-color: white; border-radius: 6px; min-height: 50px; width: 125px; color: black !important; padding-left: 10px;">
                    <p style="color: black !important;"><b>${label.html()}</b></p>
                  </div>`);
        }}
      />
    </div>
  );
}

export default WorldMap;
