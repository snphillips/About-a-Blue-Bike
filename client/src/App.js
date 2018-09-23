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
      womanCyclist: "womanCyclist_state",
      manCyclist: "manCyclist_state",
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
    this.displayErrorOrDisplayResults = this.displayErrorOrDisplayResults.bind(this);
    // this.bikeIdDoesExist = this.bikeIdDoesExist.bind(this);
    // this.bikeIdDoesNotExist = this.bikeIdDoesNotExist.bind(this);
    // this.whatIsHost = this.whatIsHost.bind(this);

  }
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // End of constructor
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // Not working
  // whatIsHost(){
  //   let host = process.env.NODE_ENV === 'production' ?
  //   "https://bluebikes.herokuapp.com/":
  //   'http://localhost:4000';
  //   console.log("The process.env.NODE_ENV is:", process.env.NODE_ENV,  "is and The host is:", host)
  // }

  //  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  //  The API calls from the client.
  //  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

  // Is limited by query max set in server.
  // To adjust, visit biketripqueries.js in the Router folder
  axiosAllBikeTripsFromAPI() {
    axios.get(`https://bluebikes.herokuapp.com`)
      .then( (response) => {
        // console.log("axiosAllBikeTripsFromAPI", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosUniqueBikesFromAPI() {
    axios.get(`https://bluebikes.herokuapp.com/uniquebikes`)
      .then( (response) => {
        console.log("axiosUniqueBikesFromAPI:", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosAllBikeTripsByIdFromAPI() {
    axios.get(`https://bluebikes.herokuapp.com/${this.state.bikeId}`)
      .then( (response) => {
        // console.log("axiosAllBikeTripsByIdFromAPI", response);
      })
      .catch( function (error) {
        console.log(error);
      });
  }

  axiosTotalNumTripsByIdFromAPI() {
    this.setState({loading: true})
    axios.get(`https://bluebikes.herokuapp.com/totaltrips/${this.state.bikeId}`)
      .then( (response) => {
        // console.log("axiosTotalNumTripsByIdFromAPI", response.data[0].totaltrips);
        this.setState({totalTrips: response.data[0].totaltrips})
        this.displayErrorOrDisplayResults()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosWomanTripsByIdFromAPI() {
    axios.get(`https://bluebikes.herokuapp.com/womancyclisttrips/${this.state.bikeId}`)
      .then( (response) => {
        // console.log("axiosWomanTripsByIdFromAPI",response.data[0].womancyclisttrips);
        this.setState({womanCyclist: response.data[0].womancyclisttrips})
        this.displayErrorOrDisplayResults()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosManTripsByIdFromAPI() {
    axios.get(`https://bluebikes.herokuapp.com/mancyclisttrips/${this.state.bikeId}`)
      .then( (response) => {
        // console.log("axiosManTripsByIdFromAPI", response.data[0].mancyclisttrips);
        this.setState({manCyclist: response.data[0].mancyclisttrips})
        this.displayErrorOrDisplayResults()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosUnknownGenderTripsByIdFromAPI() {
    axios.get(`https://bluebikes.herokuapp.com/unknowngendercyclisttrips/${this.state.bikeId}`)
      .then( (response) => {
        // console.log("axiosUnknownGenderTripsByIdFromAPI", response.data[0].unknowngendercyclisttrips);
        this.setState({genderUnknownCyclist: response.data[0].unknowngendercyclisttrips})
        this.displayErrorOrDisplayResults()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosFirstRideDateByIdFromAPI() {
    axios.get(`https://bluebikes.herokuapp.com/firstridedate/${this.state.bikeId}`)
      .then( (response) => {
       // console.log("axiosFirstRideDateByIdFromAPI", response.data[0].firstridedate);
        this.setState({firstRideDate: response.data[0].firstridedate})
        this.displayErrorOrDisplayResults()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

    axiosFirstRideTimeByIdFromAPI() {
    axios.get(`https://bluebikes.herokuapp.com/firstridetime/${this.state.bikeId}`)
      .then( (response) => {
       // console.log("axiosFirstRideTimeByIdFromAPI", response.data[0].firstridedate);
        this.setState({firstRideTime: response.data[0].firstridetime})
        this.displayErrorOrDisplayResults()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosLastRideDateByIdFromAPI() {
    axios.get(`https://bluebikes.herokuapp.com/lastridedate/${this.state.bikeId}`)
      .then( (response) => {
       // console.log("axiosFirstRideDateByIdFromAPI", response.data[0].lastridedate);
        this.setState({lastRideDate: response.data[0].lastridedate})
        this.displayErrorOrDisplayResults()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosLastRideTimeByIdFromAPI() {
  axios.get(`https://bluebikes.herokuapp.com/lastridetime/${this.state.bikeId}`)
    .then( (response) => {
     // console.log("axiosFirstRideDateByIdFromAPI", response.data[0].lastridedate);
      this.setState({lastRideTime: response.data[0].lastridetime})
      this.displayErrorOrDisplayResults()
    })
    .catch(function (error) {
      console.log(error);
    });
}

  axiosTotalTimeByIdFromAPI() {
    axios.get(`https://bluebikes.herokuapp.com/totaltime/${this.state.bikeId}`)
      .then( (response) => {
       // console.log("axiosTotalTimeByIdFromAPI", response.data[0].totaltimeonroad);
        this.setState({totalTime: response.data[0].totaltimeonroad})
        this.displayErrorOrDisplayResults()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosTotalDistanceByIdFromAPI() {
    axios.get(`https://bluebikes.herokuapp.com/totaldistance/${this.state.bikeId}`)
      .then( (response) => {
       // console.log("axiosTotalDistanceByIdFromAPI", response.data[0].totaldistance );
        this.setState({totalDistance: response.data[0].totaldistance})
        this.displayErrorOrDisplayResults()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosAvgDurationByIdFromAPI() {
    axios.get(`https://bluebikes.herokuapp.com/avgtripdurationbyid/${this.state.bikeId}`)
      .then( (response) => {
       // console.log("axiosAvgDurationByIdFromAPI", response.data[0].avgtripduration );
        this.setState({avgTripDurationById: response.data[0].avgtripdurationbyid})
        this.displayErrorOrDisplayResults()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosTotalStationsByIdFromAPI() {
    axios.get(`https://bluebikes.herokuapp.com/totalstations/${this.state.bikeId}`)
      .then( (response) => {
       // console.log("axiosTotalStationsByIdFromAPI", response.data[0].totalstations);
        this.setState({totalStations: response.data[0].totalstations})
        this.displayErrorOrDisplayResults()
      })
      .catch( function (error) {
        console.log(error);
      });
  }

    axiosTopStationByIdFromAPI() {
    axios.get(`https://bluebikes.herokuapp.com/topstation/${this.state.bikeId}`)
      .then( (response) => {
       // console.log("axiosTotalStationsByIdFromAPI", response.data[0].startstationname);
        this.setState({topStation: response.data[0].startstationname})
        this.displayErrorOrDisplayResults()
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
  //  Random bikeId number generator - in progress
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
  //  Here is where we check if the user inputed a bikeId with a trip history.
  //  If user chooses a dud bikeId, they are prompted to choose an other number.
  //  Also, here is where we enable the spinner. When there's a response, (either
  //  successful on not), loading is set to false, which dissables the spinner.
  //  ==================================================================
  displayErrorOrDisplayResults() {
    let response = "response.data[0].totaltrips == 0"
    if (this.response) {
      this.setState({loading: false});
      this.setState({bikeIdValid: false});
      this.showErrorMessage();
      } else {
        this.setState({bikeIdValid: true})
        this.setState({loading: false})
        this.setState({bikeResultsPageDisplay: {'display': true}})
        this.setState({bikeLookupPageDisplay: {'display': 'none'}})
      }
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
