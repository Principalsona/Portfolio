import React, { useEffect, useRef } from 'react';
import Datamap from 'datamaps';
import * as d3 from 'd3';
import * as topojson from 'topojson';

interface DatamapComponentProps {
    width: number;
    height: number;
    scope?: string; // scope allows for setting a specific region, e.g., 'usa'
    fills?: { [key: string]: string };
    data?: { [key: string]: any };
    mapType?: 'world' | 'usa' | 'custom'; // mapType to define the map (world, usa, custom)
}

const DatamapComponent: React.FC<DatamapComponentProps> = ({
    width,
    height,
    scope = 'world',
    fills = {},
    data = {},
    mapType = 'world'
}) => {
    const mapContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mapContainerRef.current) {
            const options = {
                element: mapContainerRef.current,
                width,
                height,
                fills: {
                    ...fills,
                    defaultFill: '#ddd', // default fill color
                },
                data,
                geographyConfig: {
                    highlightOnHover: true,
                    popupOnHover: true,
                },
            };

            // Initialize the map
            new Datamap(options);
        }
    }, [width, height, scope, fills, data, mapType]);

    return <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />;
};

export default DatamapComponent;
