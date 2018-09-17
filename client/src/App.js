import React from "react";
import axios from 'axios';
import Header from "./Header";
import Home from "./Home";
// import About from "./About";
import BikeLookupPage from "./BikeLookupPage";
import BikeResults from "./BikeResults";
// import axiosTotalNumTripsByIdFromAPI from "./ApiCalls";
// import axiosWomanTripsByIdFromAPI from "./ApiCalls";
// import axiosManTripsByIdFromAPI from "./ApiCalls";


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bikeId: "bikeId_initial_state",
      totalTrips: "totalTrips_state",
      manCyclist: "manCyclist_state",
      womanCyclist: "womanCyclist_state",
      genderUnknownCyclist: "genderUnknownCyclist_state",
      firstRideDate: "firstRideDate_state",
      firstRideTime: "firstRideTime_state",
      lastRideDate: "lastRideDate_state",
      lastRideTime: "lastRideTime_state",
      totalTime: "totalTime_state",
      totalDistance: "totalDistance_state",
      avgTripDurationById: "avgTripDurationById_state",
      avgTripDuration: "avgTripDuration_state",
      totalStations:"totalStations_state",
      topStation:"topStation_state",

      loading: false,
      bikeIdValid: true,

      homeDisplay: {"display": true},
      aboutDisplay: {"display": "none"},
      bikeLookupPageDisplay: {"display": "none"},
      bikeSearchFormDisplay: {"display": "none"},
      bikeResultsPageDisplay: {"display": "none"}
    };

    // This binding is necessary to make `this` work in the callback
    // this.componentDidMount = this.componentDidMount.bind(this);
    this.homeNavItem = this.homeNavItem.bind(this);
    this.aboutNavItem = this.aboutNavItem.bind(this);
    this.lookupNavItem = this.lookupNavItem.bind(this);
    this.clickToGoToBikeLookup = this.clickToGoToBikeLookup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.allAPICalls = this.allAPICalls.bind(this);
    this.axiosUniqueBikesFromAPI = this.axiosUniqueBikesFromAPI.bind(this);

    // One place to list host in case I need to change them all
    let host = "http://localhost:4000"
  }

  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // End of constructor
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  //  The API calls from the client.
  //  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

  // Is limited by query max set in server.
  // To adjust, visit biketripqueries.js in the Router folder
  axiosAllBikeTripsFromAPI() {
    axios.get(`http://localhost:4000`)
      .then( (response) => {
        // console.log("axiosAllBikeTripsFromAPI", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosUniqueBikesFromAPI() {
    axios.get(`http://localhost:4000/uniquebikes`)
      .then( (response) => {
        console.log("axiosUniqueBikesFromAPI:", response);
        console.log("poptart")
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosAllBikeTripsByIdFromAPI() {
    axios.get(`http://localhost:4000/${this.state.bikeId}`)
      .then( (response) => {
        // console.log("axiosAllBikeTripsByIdFromAPI", response);
      })
      .catch( function (error) {
        console.log(error);
      });
  }

  // Here is where we check if the user inputed a bikeId with a trip history.
  // If user chooses a dud bikeId, they are prompted to choose an other number.
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

  axiosUnknownGenderTripsByIdFromAPI() {
    axios.get(`http://localhost:4000/unknowngendercyclisttrips/${this.state.bikeId}`)
      .then( (response) => {
        // console.log("axiosUnknownGenderTripsByIdFromAPI", response.data[0].unknowngendercyclisttrips);
        this.setState({genderUnknownCyclist: response.data[0].unknowngendercyclisttrips})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosFirstRideDateByIdFromAPI() {
    axios.get(`http://localhost:4000/firstridedate/${this.state.bikeId}`)
      .then( (response) => {
       // console.log("axiosFirstRideDateByIdFromAPI", response.data[0].firstridedate);
        this.setState({firstRideDate: response.data[0].firstridedate})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

    axiosFirstRideTimeByIdFromAPI() {
    axios.get(`http://localhost:4000/firstridetime/${this.state.bikeId}`)
      .then( (response) => {
       // console.log("axiosFirstRideTimeByIdFromAPI", response.data[0].firstridedate);
        this.setState({firstRideTime: response.data[0].firstridetime})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosLastRideDateByIdFromAPI() {
    axios.get(`http://localhost:4000/lastridedate/${this.state.bikeId}`)
      .then( (response) => {
       // console.log("axiosFirstRideDateByIdFromAPI", response.data[0].lastridedate);
        this.setState({lastRideDate: response.data[0].lastridedate})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosLastRideTimeByIdFromAPI() {
  axios.get(`http://localhost:4000/lastridetime/${this.state.bikeId}`)
    .then( (response) => {
     // console.log("axiosFirstRideDateByIdFromAPI", response.data[0].lastridedate);
      this.setState({lastRideTime: response.data[0].lastridetime})
    })
    .catch(function (error) {
      console.log(error);
    });
}

  axiosTotalTimeByIdFromAPI() {
    axios.get(`http://localhost:4000/totaltime/${this.state.bikeId}`)
      .then( (response) => {
       // console.log("axiosTotalTimeByIdFromAPI", response.data[0].totaltimeonroad);
        this.setState({totalTime: response.data[0].totaltimeonroad})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosTotalDistanceByIdFromAPI() {
    axios.get(`http://localhost:4000/totaldistance/${this.state.bikeId}`)
      .then( (response) => {
       // console.log("axiosTotalDistanceByIdFromAPI", response.data[0].totaldistance );
        this.setState({totalDistance: response.data[0].totaldistance})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosAvgDurationByIdFromAPI() {
    axios.get(`http://localhost:4000/avgtripdurationbyid/${this.state.bikeId}`)
      .then( (response) => {
       // console.log("axiosAvgDurationByIdFromAPI", response.data[0].avgtripduration );
        this.setState({avgTripDurationById: response.data[0].avgtripdurationbyid})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosTotalStationsByIdFromAPI() {
    axios.get(`http://localhost:4000/totalstations/${this.state.bikeId}`)
      .then( (response) => {
       // console.log("axiosTotalStationsByIdFromAPI", response.data[0].totalstations);
        this.setState({totalStations: response.data[0].totalstations})
      })
      .catch( function (error) {
        console.log(error);
      });
  }

    axiosTopStationByIdFromAPI() {
    axios.get(`http://localhost:4000/topstation/${this.state.bikeId}`)
      .then( (response) => {
       // console.log("axiosTotalStationsByIdFromAPI", response.data[0].startstationname);
        this.setState({topStation: response.data[0].startstationname})
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  //  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  //  The API calls END
  //  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

  //  ==================================================================
  //  All the API calls from the client in one place
  //  ==================================================================

  allAPICalls() {
    this.axiosAllBikeTripsByIdFromAPI();
    this.axiosTotalNumTripsByIdFromAPI();
    this.axiosWomanTripsByIdFromAPI();
    this.axiosManTripsByIdFromAPI();
    this.axiosUnknownGenderTripsByIdFromAPI();
    this.axiosFirstRideDateByIdFromAPI();
    this.axiosFirstRideTimeByIdFromAPI()
    this.axiosLastRideDateByIdFromAPI();
    this.axiosLastRideTimeByIdFromAPI();
    this.axiosTotalTimeByIdFromAPI();
    this.axiosTotalDistanceByIdFromAPI();
    this.axiosAvgDurationByIdFromAPI();
    this.axiosTotalStationsByIdFromAPI();
    this.axiosTopStationByIdFromAPI();
    // this.axiosUniqueBikesFromAPI();
  }

  //  ==================================================================
  //  Random bikeId number generator
  //  ==================================================================
  randomBikeIdGenerator(min, max) {
    this.makeArrayOfBikeIdNumbers();
    this.getRandomInt();
  }

  getRandomInt(min, max) {
    let randomBikeId =  Math.floor(Math.random() * (33699 - 14529 + 1)) + 14529;
    console.log(randomBikeId);
  }

  makeArrayOfBikeIdNumbers() {
    let numberArray = [];
    for(var i = 14529; i <= 33699; i++) {
      numberArray.push(i)
    }
    console.log(numberArray);
  }

  randomSubmit(event) {
    console.log("randomSubmit button clicked")
     event.preventDefault();
     this.axiosUniqueBikesFromAPI();
   };

  //  ==================================================================
  //  As soon as the user interacts with BikeSerchForm.js, the bikeId
  //  updates. The API calls happen once the user clicks
  //  the 'submit' button. The reason why we're setting bikeIdValid to true,
  //  is so if the
  //  ==================================================================
   handleChange(event) {
     this.setState({bikeIdValid: true})
     this.setState({bikeId: event.target.value})
    };

  //  ==================================================================
  //  When the lookup button is clicked (on BikeSearchForm.js),
  //  the API calls are triggered all at once. See individual API calls
  //  above.
  //  ==================================================================
   handleSubmit(event) {
     event.preventDefault();
     this.allAPICalls()
   };

  //  ==================================================================
  //  If user inputs a bad number, a red error message appears when they
  //  click 'submit'. This sets the state to trigger that message.
  //  See ErrorMessage.jsx
  //  ==================================================================
   showErrorMessage() {
     this.setState({errorMessageDisplay: {'display': true}})
   };

  //  ==================================================================
  //  Click handler for "Continue to Lookup" button.
  //  Notice how bikeLookupPageDisplay is being called as a callback
  //  function...that's b/c we want to guarantee the bikeId is blank prior
  //  to the bike lookup page displaying.
  //  ==================================================================
  clickToGoToBikeLookup(event) {
    this.setState({homeDisplay: {'display': 'none'}});
    this.setState({aboutDisplay: {'display': 'none'}});
    this.setState({bikeId: ""}, () => {
      this.setState({bikeLookupPageDisplay: {'display': true}});
    });
    this.setState({bikeResultsPageDisplay: {'display': 'none'}});
  };

  //  ==================================================================
  //  Navigation bar items. See Header.jsx
  //  ==================================================================
  homeNavItem(event) {
    this.setState({bikeId: " "});
    this.setState({homeDisplay: {'display': true}});
    this.setState({aboutDisplay: {'display': 'none'}});
    this.setState({bikeLookupPageDisplay: {'display': 'none'}});
    this.setState({bikeResultsPageDisplay: {'display': 'none'}});
  }

  aboutNavItem(event) {
    this.setState({bikeId: " "});
    this.setState({homeDisplay: {'display': 'none'}});
    this.setState({aboutDisplay: {'display': true}});
    this.setState({bikeLookupPageDisplay: {'display': 'none'}});
    this.setState({bikeResultsPageDisplay: {'display': 'none'}});
  }

  lookupNavItem(event) {
    this.setState({bikeId: " "});
    this.setState({homeDisplay: {'display': 'none'}});
    this.setState({aboutDisplay: {'display': 'none'}});
    this.setState({bikeLookupPageDisplay: {'display': true}});
    this.setState({bikeResultsPageDisplay: {'display': 'none'}});
  }

  //  ==================================================================
  //  And finally, the render
  //  ==================================================================
  render() {
    return (
      <div>

        <Header
          parent_state={this.state}
          homeNavItem={this.homeNavItem}
          aboutNavItem={this.aboutNavItem}
          lookupNavItem={this.lookupNavItem} />

        <Home
          parent_state={this.state}
          clickToGoToBikeLookup={this.clickToGoToBikeLookup}
          />

    {/*    <About
          parent_state={this.state}
          clickToGoToBikeLookup={this.clickToGoToBikeLookup}
          /> */}

        <BikeLookupPage
          parent_state={this.state}
          bikeIdValid={this.state.bikeIdValid}
          loading={this.state.loading}
          showErrorMessage={this.state.errorMessageDisplay}
          randomSubmit={this.randomSubmit}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          />

        <BikeResults
          parent_state={this.state}
          clickToGoToBikeLookup={this.clickToGoToBikeLookup}
          />

      </div>
    );
  }
}
