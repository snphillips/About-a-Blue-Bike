import React from "react";
import axios from "axios";


//  Ideally the axios calls can be removed from the App.js
//  Not working yet. Why?



  axiosTotalNumTripsByIdFromAPI() {
    this.setState({loading: true})
    axios.get(`https://bluebikes.herokuapp.com/totaltrips/${this.state.bikeId}`)
      .then( (response) => {
        // let response = "response.data[0].totaltrips"
        // console.log("axiosTotalNumTripsByIdFromAPI", response.data[0].totaltrips);
        this.setState({totalTrips: response.data[0].totaltrips})
        // this.displayErrorOrDisplayResults()
      })
      .catch(function (error) {
        console.log(error);
      });
  }



export default
  axiosTotalNumTripsByIdFromAPI;
  // apiCalls;
  // axiosWomanTripsByIdFromAPI;
  // axiosManTripsByIdFromAPI;
  // axiosUnknownGenderTripsByIdFromAPI;
