import React from "react";
import axios from 'axios';
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import BikeLookupPage from "./BikeLookupPage";
import BikeResults from "./BikeResults";
// import BikeSearchForm from "./BikeSearchForm";

// import APICalls from "./APICalls";
// import allAPICalls from "./APICalls";
// import axiosAllBikeTripsFromAPI from "./APICalls";
// import axiosAllBikeTripsByIdFromAPI from "./APICalls";
// import axiosTotalNumTripsByIdFromAPI from "./APICalls";
// import axiosWomanTripsByIdFromAPI from "./APICalls";
// import axiosManTripsByIdFromAPI from "./APICalls";
// import axiosUnknownGenderTripsByIdFromAPI from "./APICalls";
// import axiosFirstRideDateByIdFromAPI from "./APICalls";
// import axiosLastRideDateByIdFromAPI from "./APICalls";
// import axiosTotalTimeByIdFromAPI from "./APICalls";
// import axiosTotalDistanceByIdFromAPI from "./APICalls";
// import axiosAveDurationByIdFromAPI from "./APICalls";
// import axiosTotalStationsByIdFromAPI from "./APICalls";
// import axiosTopStationByIdFromAPI from "./APICalls";

// React Router
// import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Switch } from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bikeId: "pizza",
      totalTrips: " totalTrips_state",
      manCyclist: "manCyclist_state",
      womanCyclist: "womanCyclist_state",
      genderUnknownCyclist: "genderUnknownCyclist_state",
      firstRideDate: "firstRideDate_state",
      lastRideDate: "lastRideDate_state",
      totalTime: "totalTime_state",
      totalDistance: "totalDistance_state",
      avgTripDuration: "aveTripDuration_state",
      totalStations:"totalStations_state",
      topStation:"topStation_state"
    };

    // This binding is necessary to make `this` work in the callback
    // this.componentDidMount = this.componentDidMount.bind(this);
    this.clickToGoToBikeLookup = this.clickToGoToBikeLookup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.lookupBikeIdAllAPICalls = this.lookupBikeIdAllAPICalls.bind(this);
    // this.allAPICalls = this.allAPICalls.bind(this);
  }

  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // End of constructor
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  //  ==================================================================
  //  All the API calls from the client in one place
  //  ==================================================================
  lookupBikeIdAllAPICalls() {
    this.axiosAllBikeTripsFromAPI();
    this.axiosAllBikeTripsByIdFromAPI();
    this.axiosTotalNumTripsByIdFromAPI();
    this.axiosWomanTripsByIdFromAPI();
    this.axiosManTripsByIdFromAPI();
    this.axiosUnknownGenderTripsByIdFromAPI();
    this.axiosFirstRideDateByIdFromAPI();
    this.axiosLastRideDateByIdFromAPI();
    this.axiosTotalTimeByIdFromAPI();
    this.axiosTotalDistanceByIdFromAPI();
    this.axiosAveDurationByIdFromAPI();
    this.axiosTotalStationsByIdFromAPI();
    this.axiosTopStationByIdFromAPI();
    console.log('Hello this.state is:', this.state)
  }

  //   componentDidMount() {
  //   this.axiosAllBikeTripsFromAPI();
  //   this.axiosAllBikeTripsByIdFromAPI();
  //   this.axiosTotalNumTripsByIdFromAPI();
  //   this.axiosWomanTripsByIdFromAPI();
  //   this.axiosManTripsByIdFromAPI();
  //   this.axiosUnknownGenderTripsByIdFromAPI();
  //   this.axiosFirstRideDateByIdFromAPI();
  //   this.axiosLastRideDateByIdFromAPI();
  //   this.axiosTotalTimeByIdFromAPI();
  //   this.axiosTotalDistanceByIdFromAPI();
  //   this.axiosAveDurationByIdFromAPI();
  //   this.axiosTotalStationsByIdFromAPI();
  //   this.axiosTopStationByIdFromAPI();
  //   console.log('Hello this.state is:', this.state)
  // }

  //  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  //  The API calls from the client.
  //  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

  // works but is limited by query max
  axiosAllBikeTripsFromAPI() {
    axios.get(`http://localhost:4000`)
      .then(function (response) {
        console.log("axiosAllBikeTripsFromAPI", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosAllBikeTripsByIdFromAPI() {
    axios.get(`http://localhost:4000/${this.state.bikeId}`,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({'bikeId': this.state.selected})
    })
      .then(function (response) {
        console.log("axiosAllBikeTripsByIdFromAPI", response);
      })
      .catch( function (error) {
        console.log(error);
      });
  }

  axiosTotalNumTripsByIdFromAPI() {
    axios.get(`http://localhost:4000/totaltrips/${this.state.bikeId}`)
      .then(function (response) {
        console.log("axiosTotalNumTripsByIdFromAPI", response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  axiosWomanTripsByIdFromAPI() {
    axios.get(`http://localhost:4000/womancyclisttrips/${this.state.bikeId}`)
      .then(function (response) {
        console.log("axiosWomanTripsByIdFromAPI", response);
      })
      .catch(function (error) {
        console.log("Not an active bike. Pick an other number.", error);
      });
  }

  axiosManTripsByIdFromAPI() {
    axios.get(`http://localhost:4000/mancyclisttrips/${this.state.bikeId}`)
      .then(function (response) {
        console.log("axiosManTripsByIdFromAPI", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosUnknownGenderTripsByIdFromAPI() {
    axios.get(`http://localhost:4000/unknowngendercyclisttrips/${this.state.bikeId}`)
      .then(function (response) {
        console.log("axiosUnknownGenderTripsByIdFromAPI", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosFirstRideDateByIdFromAPI() {
    axios.get(`http://localhost:4000/firstridedate/${this.state.bikeId}`)
      .then(function (response) {
        console.log("axiosFirstRideDateByIdFromAPI", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosLastRideDateByIdFromAPI() {
    axios.get(`http://localhost:4000/lastridedate/${this.state.bikeId}`)
      .then(function (response) {
        console.log("axiosLastRideDateByIdFromAPI", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  axiosTotalTimeByIdFromAPI() {
    axios.get(`http://localhost:4000/totaltime/${this.state.bikeId}`)
      .then(function (response) {
        console.log("axiosTotalTimeByIdFromAPI", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosTotalDistanceByIdFromAPI() {
    axios.get(`http://localhost:4000/totaldistance/${this.state.bikeId}`)
      .then(function (response) {
        console.log("axiosTotalDistanceByIdFromAPI", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosAveDurationByIdFromAPI() {
    axios.get(`http://localhost:4000/avetripduration/${this.state.bikeId}`)
      .then(function (response) {
        console.log("axiosAveDurationByIdFromAPI", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosTotalStationsByIdFromAPI() {
    axios.get(`http://localhost:4000/totalstations/${this.state.bikeId}`)
      .then(function (response) {
        console.log("axiosTotalStationsByIdFromAPI", response);
      })
      .catch( function (error) {
        console.log(error);
      });
  }

    axiosTopStationByIdFromAPI() {
    axios.get(`http://localhost:4000/topstation/${this.state.bikeId}`)
      .then(function (response) {
        console.log("axiosTopStationByIdFromAPI", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //  ******************************************************************
  //  Click handler for "Lookup" button. Note: you're passing
  //  props like a hot potato from App.js to BikeLookupPage.jsx, to BikeSearchForm.js
  //  ******************************************************************
  handleChange(event) {
    this.setState({bikeId: event.target.value})
    // window.location.assign("/bikeresults")
    return <BikeResults />
  };


  handleSubmit(event) {
    console.log("bikeLookupHandleSubmit fired")
    alert("bikeLookupHandleSubmit fired")

    this.LookupBikeId();
    this.setState({bikeId: 66666}, ()  => {
      console.log("bikeLookupButtonChange has been clicked and bikeId is ", this.state.bikeId);
      alert("bikeLookupButtonChange has been clicked and bikeId is ", this.state.bikeId);
      }
    );
    // don't know what this does
    event.preventDefault();
  }



  //  ==================================================================
  //  Click handler for "Continue to Lookup" button. Note: you're passing
  //  props like a hot potato from App.js to Home.jsx, to ContinueToBikeLookupButton.js
  //  ==================================================================
  clickToGoToBikeLookup(event) {
    console.log("clickToGoToBikeLookup has been clicked")
    return <BikeLookupPage />
    // window.location.assign("/bicyclelookuppage");
  }

  //  ==================================================================
  //  And finally, the render
  //  ==================================================================
  render() {
    return (
      <div>
        <Header parent_state={this.state} />

        <Switch>
          <Route
            exact
            path="/about"
            render={routeProps => (
              <About
                parent_state={this.state}
                clickToGoToBikeLookup={this.clickToGoToBikeLookup}
              />
            )}
          />

          <Route
            exact
            path="/bicyclelookuppage"
            render={routeProps => (
              <BikeLookupPage
              parent_state={this.state}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              />
            )}
          />

          <Route
            path="/bikeresults"
            render={routeProps => (
              <BikeResults
                parent_state={this.state}
              />
            )}
          />

          <Route
            exact
            path="/"
            render={routeProps => (
              <Home
                parent_state={this.state}
                clickToGoToBikeLookup={this.clickToGoToBikeLookup}

              />
            )}
          />

        </Switch>
      </div>
    );
  }
}
