import React, {useState, useEffect} from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import './Map.css';

const Map = ({setLoading}) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    mapData();
  }, []);

  const mapData = async () => {
    setLoading(true);
    const response = await axios.get('https://corona.lmao.ninja/v2/countries');
    setResults(response.data.slice(1));
    setLoading(false);
  };

  const countriesLocations = results.map((data, i) => {
    return (
      <div
        className="map-style"
        lat={data.countryInfo.lat}
        lng={data.countryInfo.long}
      >
        <img height="10px" src={data.countryInfo.flag} alt='' />
        <br />
        <span className="map-span">
          {data.countryInfo.iso3}
        </span>
        <br />
        {data.active}
      </div>
    );
  });

  return (
    <div style={{height: '50vh', width: '150%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyDGgx_8WJqJVqKmr-0VP233ZiNxWeNM8bA'}}
        defaultCenter={{
          lat: 20,
          lng: 77,
        }}
        defaultZoom={4}
      >
        {countriesLocations}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
