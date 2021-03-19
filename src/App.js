import './App.css';
import Axios from 'axios';
import React from 'react';
import Display from './components/Display.js';
import Navbar from './components/Navbar.js';

class App extends React.Component {
  state= {
    coords:{
      latitude:28,
      longitude:77
    },
    data: {},
    regionInput: ""
  }

  componentDidMount(){
    if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(position => {
        let newCoords={
          latitude:position.coords.latitude,
          longitude:position.coords.longitude
        }
        this.setState({coords:newCoords});

     Axios.get(`http://api.weatherstack.com/current?access_key=1bae2f4c5c4fe68dc817ee1262e63386&query=${this.state.coords.latitude},${this.state.coords.longitude}`).then(res => {
          let Weather_data = {
          temperature: res.data.current.temperature,
         description: res.data.current.weather_descriptions[0],
         location: res.data.location.name,
         region: res.data.location.region,
         country: res.data.location.country,
         wind_speed: res.data.current.wind_speed,
         pressure: res.data.current.pressure,
         precip: res.data.current.precip,
         humidity: res.data.current.humidity,
         img: res.data.current.weather_icons
          }
          this.setState({data:Weather_data})
      })
   })
 }
}
  changeRegion = (value) => {
  this.setState({ regionInput: value })
  }

// changeLocationTest = (e) =>{
//   this.setState({data:{}}, function () {
//
//       console.log("setting emp obj",this.state.data);
//         this.changeLocation(e);
//   });
//
// }

  changeLocation = (e) => {
    e.preventDefault();
    if(this.state.regionInput){
    Axios.get(`http://api.weatherstack.com/current?access_key=1bae2f4c5c4fe68dc817ee1262e63386&query=${this.state.regionInput}`).then(res => {
    if(res.status===200 && res.data.request){
      let Weather_data = {
        temperature: res.data.current.temperature,
        description: res.data.current.weather_descriptions[0],
        location: res.data.location.name,
        region: res.data.location.region,
        country: res.data.location.country,
        wind_speed: res.data.current.wind_speed,
        pressure: res.data.current.pressure,
        precip: res.data.current.precip,
        humidity: res.data.current.humidity,
        img: res.data.current.weather_icons
      }

      this.setState({ data: Weather_data });
    }else{
      if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
          let newCoords={
            latitude:position.coords.latitude,
            longitude:position.coords.longitude
          }
          this.setState({coords:newCoords});

       Axios.get(`http://api.weatherstack.com/current?access_key=1bae2f4c5c4fe68dc817ee1262e63386&query=${this.state.coords.latitude},${this.state.coords.longitude}`).then(res => {
            let Weather_data = {
            temperature: res.data.current.temperature,
           description: res.data.current.weather_descriptions[0],
           location: res.data.location.name,
           region: res.data.location.region,
           country: res.data.location.country,
           wind_speed: res.data.current.wind_speed,
           pressure: res.data.current.pressure,
           precip: res.data.current.precip,
           humidity: res.data.current.humidity,
           img: res.data.current.weather_icons
            }
            this.setState({data:Weather_data})
        })
     })
   }
 }})




  }
}

  render() {
    return (
      <div className="App">
       <div className="container">
        <Navbar changeRegion={this.changeRegion} changeLocation={this.changeLocation}/>
        <Display Weather_data={this.state.data}/>
       </div>
      </div>
    );
  }
}

export default App;
