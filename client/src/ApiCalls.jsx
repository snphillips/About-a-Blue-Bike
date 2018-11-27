import React from "react";
import axios from "axios";


//  Ideally the axios calls can be removed from the App.js to keep things tidy
//  Not working yet. Why?



  axiosWomanTripsByIdFromAPI() {
    axios.get(this.state.dataSource +`/womancyclisttrips/${this.state.bikeId}`)
      .then( (response) => {
        this.setState({womanCyclist: response.data[0].womancyclisttrips})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosManTripsByIdFromAPI() {
    axios.get(this.state.dataSource +`/mancyclisttrips/${this.state.bikeId}`)
      .then( (response) => {
        this.setState({manCyclist: response.data[0].mancyclisttrips})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosUnknownGenderTripsByIdFromAPI() {
    axios.get(this.state.dataSource +`/unknowngendercyclisttrips/${this.state.bikeId}`)
      .then( (response) => {
        this.setState({genderUnknownCyclist: response.data[0].unknowngendercyclisttrips})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosTotalStationsByIdFromAPI() {
    axios.get(this.state.dataSource +`/totalstations/${this.state.bikeId}`)
      .then( (response) => {
        this.setState({totalStations: response.data[0].totalstations})
      })
      .catch( function (error) {
        console.log(error);
      });
  }

  axiosTopStationByIdFromAPI() {
    axios.get(this.state.dataSource +`/topstation/${this.state.bikeId}`)
      .then( (response) => {
        this.setState({topStation: response.data[0].startstationname})
      })
      .catch(function (error) {
        console.log(error);
      });
  }



export default {
  axiosWomanTripsByIdFromAPI,
  axiosManTripsByIdFromAPI,
  axiosUnknownGenderTripsByIdFromAPI,
  axiosTotalStationsByIdFromAPI,
  axiosTotalStationsByIdFromAPI;
}

