import React, { useEffect } from "react";

const Maps = () => {
    const mapRef = React.useRef(null);

    useEffect(() => {
        const initMap = async () => {
            // Replace 'YOUR_API_KEY' with your actual API key
            const apiKey = 'AIzaSyBs8PSlZQBKLfJ5p1GaW2y6m8hMNqiNRJE';

            const loader = new Loader({
                apiKey,
                version: 'weekly',
            });

            const { Map } = await loader.importLibrary("maps");

            const positions = {
                lat: 43.642693,
                long: -79.3871189,
            };

            // map options
            const mapOptions = {
                center: positions,
                zoom: 17,
                mapId: 'MY_NEXTJS_MAPID',
            };

            // set up the map
            const map = new Map(mapRef.current, mapOptions);
        };

        initMap();
    }, []); // Empty dependency array to run the effect only once

    return (
        <div className="max-w-[1100px] w-full mx-auto">
            <div style={{ height: '600px' }} ref={mapRef}></div>
        </div>
    );
};

export default Maps;