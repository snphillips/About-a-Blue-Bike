import React from "react";
import axios from 'axios';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import BikeLookupPage from "./BikeLookupPage";
import BikeResults from "./BikeResults";
// import axiosWomanTripsByIdFromAPI from "./ApiCalls";


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: "https://bluebikes.herokuapp.com", // what is serving the data?
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

      loading: false, // the loading spinner
      bikeIdValid: true, // if false, an alert is triggered

      homeDisplay: {"display": true},
      aboutDisplay: {"display": "none"},
      bikeLookupPageDisplay: {"display": "none"},
      bikeSearchFormDisplay: {"display": "none"},
      bikeResultsPageDisplay: {"display": "none"}
    };

    // This binding is necessary to make `this` work in the callback
    // this.componentDidMount = this.componentDidMount.bind(this);
    this.whatIsDataHost = this.whatIsDataHost.bind(this);
    this.homeNavItem = this.homeNavItem.bind(this);
    this.aboutNavItem = this.aboutNavItem.bind(this);
    this.lookupNavItem = this.lookupNavItem.bind(this);
    this.clickToGoToBikeLookup = this.clickToGoToBikeLookup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.allAPICalls = this.allAPICalls.bind(this);
    this.randomSubmit = this.randomSubmit.bind(this);

  }
  // *************************************************************
  // End of constructor
  // *************************************************************

  //  ============================================================
  //  TODO: fix this
  //  This changes the data source depending on whether the site
  //  is in production or development.
  //  ============================================================
    whatIsDataHost(){
    // if (process.env.NODE_ENV == 'development')  {
    //   this.setState({dataSource: "http://localhost:4000" })
    //   } else {
    //     this.setState({dataSource: "https://bluebikes.herokuapp.com"})
      // }

      console.log("Hi from whatisHost process.env.NODE_ENV is:", process.env.NODE_ENV)
      console.log("Hi from  whatisHost this.state.dataSource is:", this.state.dataSource)
    }


  //  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  //  The API calls from the client.
  //  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

  // The result is limited by query max set in server.
  // To adjust, visit biketripqueries.js in the Router folder
  // Not using in app, but keep for testing purposes
  axiosAllBikeTripsFromAPI() {
    axios.get(this.state.dataSource)
      .then( (response) => {
      })
      .catch(function (error) {
        console.log(error);
      });
  }

 // Some of the SIMPLE QUERIES all in one place
 // Here is where we check if the user inputed a bikeId with a trip history.
 // If user chooses a dud bikeId, they are prompted to choose an other number.
 // Also, the loading spinner is enabled & dissabled here
  axiosSimpleQueriesByIdFromAPI() {
    this.setState({loading: true})
    axios.get(this.state.dataSource +`/simplequeries/${this.state.bikeId}`)
      .then( (response) => {
        this.setState({totalTrips: response.data[0].totaltrips})
        this.setState({firstRideDate: response.data[0].firstridedate})
        this.setState({firstRideTime: response.data[0].firstridetime})
        this.setState({lastRideDate: response.data[0].lastridedate})
        this.setState({lastRideTime: response.data[0].lastridetime})
        this.setState({totalTime: response.data[0].totaltimeonroad})
        this.setState({totalDistance: response.data[0].totaldistance})
        this.setState({avgTripDurationById: response.data[0].avgtripdurationbyid})
        this.setState({totalStations: response.data[0].totalstations})

          if (response.data[0].totaldistance == 0) {
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
  //  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  //  The API calls END
  //  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

  //  =============================================================
  //  All the API calls from the client in one place
  //  =============================================================
  allAPICalls() {
    this.axiosSimpleQueriesByIdFromAPI()
    this.axiosWomanTripsByIdFromAPI();
    this.axiosManTripsByIdFromAPI();
    this.axiosUnknownGenderTripsByIdFromAPI();
    this.axiosTopStationByIdFromAPI();
  }

  //  ============================================================
  //  Random bikeId number generator button
  //  ============================================================
  randomSubmit(event) {
    event.preventDefault();
    this.whatIsDataHost();
    this.setState({bikeIdValid: true})
    this.setState({loading: true});
    axios.get(this.state.dataSource +`/randombikeid`)
          .then( (response) => {
            this.setState({bikeId: response.data[0].bikeid})
            this.setState({loading: false});
      })
      .catch(function (error) {
        console.log(error);
      });
   };

  //  ==================================================================
  //  As soon as the user interacts with BikeSerchForm.js, the bikeId
  //  updates. The API calls happen once the user clicks
  //  the 'submit' button. The reason why we're setting bikeIdValid to true,
  //  is to disable the error message.
  //  ==================================================================
   handleChange(event) {
     this.setState({bikeIdValid: true})
     this.setState({bikeId: event.target.value})
    };

  //  ==================================================================
  //  When the lookup button is clicked (on BikeSearchForm.js),
  //  the API calls are triggered all at once. See individual API calls
  //  above in allAPICalls();
  //  ==================================================================
   handleSubmit(event) {
     event.preventDefault();
     this.whatIsDataHost();
     this.allAPICalls();
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
  //  Mapbox - not online yet
  //  ==================================================================
  // mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

  //   const map = new mapboxgl.Map({
  //     container: 'YOUR_CONTAINER_ELEMENT_ID',
  //     style: 'mapbox://styles/mapbox/streets-v10'
  //   });



  //  ==================================================================
  //  Navigation bar items. See Header.jsx
  //  Too crowded? Install React Router?
  //  ==================================================================
  homeNavItem(event) {
    this.setState({bikeId: " "});
    this.setState({homeDisplay: {'display': true}});
    this.setState({aboutDisplay: {'display': 'none'}});
    this.setState({bikeLookupPageDisplay: {'display': 'none'}});
    this.setState({bikeResultsPageDisplay: {'display': 'none'}});
  };

  aboutNavItem(event) {
    this.setState({bikeId: " "});
    this.setState({homeDisplay: {'display': 'none'}});
    this.setState({aboutDisplay: {'display': true}});
    this.setState({bikeLookupPageDisplay: {'display': 'none'}});
    this.setState({bikeResultsPageDisplay: {'display': 'none'}});
  };

  lookupNavItem(event) {
    this.setState({bikeId: " "});
    this.setState({homeDisplay: {'display': 'none'}});
    this.setState({aboutDisplay: {'display': 'none'}});
    this.setState({bikeLookupPageDisplay: {'display': true}});
    this.setState({bikeResultsPageDisplay: {'display': 'none'}});
  };

  //  ==================================================================
  //  And finally, the render
  //  ==================================================================
  render() {
    return (
      <div>

        <Header
          parentState={this.state}
          homeNavItem={this.homeNavItem}
          aboutNavItem={this.aboutNavItem}
          lookupNavItem={this.lookupNavItem} />

        <Home
          parentState={this.state}
          clickToGoToBikeLookup={this.clickToGoToBikeLookup}
          />

       <About
          parentState={this.state}
          clickToGoToBikeLookup={this.clickToGoToBikeLookup}
          />

        <BikeLookupPage
          parentState={this.state}
          bikeIdValid={this.state.bikeIdValid}
          loading={this.state.loading}
          showErrorMessage={this.state.errorMessageDisplay}
          randomBikeId={this.state.randomBikeId}
          randomSubmit={this.randomSubmit}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          />

        <BikeResults
          parentState={this.state}
          clickToGoToBikeLookup={this.clickToGoToBikeLookup}
          />

      </div>
    );
  }
}
