import React from 'react'

export default function Display(props) {
   const { temperature, description, location, region, country, wind_speed, pressure, precip, humidity, img } = props.Weather_data;
    return (
      <div className="weather-wrapper">
        <div className="weather-card">
         <div className="header">
           <img className="mainImg" src={img} alt="weather-img" />
           <h1>{temperature}<sup>o</sup>C , {description}</h1>
           <h4>{location}</h4>
           <p>{region} , {country}</p>
         </div>
           <p><b>Wind Speed</b>(km/hr)</p>
           <h3>{wind_speed}</h3>
           <p><b>Preassure</b>(millibar)</p>
           <h3>{pressure}</h3>
           <p><b>Precipitation</b>(mm)</p>
           <h3>{precip}</h3>
           <p><b>Humidity</b>(%)</p>
           <h3>{humidity}</h3>

          </div>

      </div>

    )
}
