import React from "react";
import axios from "axios";


//  Not working. Why?

  axiosTotalNumTripsByIdFromAPI() {
    this.setState({loading: true})
    axios.get(`http://localhost:4000/totaltrips/${this.state.bikeId}`)
      .then( (response) => {
        // console.log("axiosTotalNumTripsByIdFromAPI", response.data[0].totaltrips);
        this.setState({totalTrips: response.data[0].totaltrips})

          if (response.data[0].totaltrips == 0) {
            this.setState({loading: false});
            this.setState({bikeIdValid: false});
            this.showErrorMessage();
          } else {
            this.setState({bikeIdValid: true})
            this.setState({loading: false})
            this.setState({bikeResultsPageDisplay: {'display': true}})
            this.setState({bikeLookupPageDisplay: {'display': 'none'}})
          }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

    axiosWomanTripsByIdFromAPI() {
    axios.get(`http://localhost:4000/womancyclisttrips/${this.state.bikeId}`)
      .then( (response) => {
        // console.log("axiosWomanTripsByIdFromAPI",response.data[0].womancyclisttrips);
        this.setState({womanCyclist: response.data[0].womancyclisttrips})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosManTripsByIdFromAPI() {
    axios.get(`http://localhost:4000/mancyclisttrips/${this.state.bikeId}`)
      .then( (response) => {
        // console.log("axiosManTripsByIdFromAPI", response.data[0].mancyclisttrips);
        this.setState({manCyclist: response.data[0].mancyclisttrips})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

module.exports =
  axiosTotalNumTripsByIdFromAPI;
  axiosWomanTripsByIdFromAPI;
  axiosManTripsByIdFromAPI;
