import React from "react";
import axios from 'axios';
import Header from "./Header";
import Home from "./Home";
// import About from "./About";
import BikeLookupPage from "./BikeLookupPage";
import BikeResults from "./BikeResults";


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // dataSource: "https://bluebikes.herokuapp.com", // what is serving the data?
      dataSource: "http://localhost:4000", // what is serving the data?

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
    this.homeNavItem = this.homeNavItem.bind(this);
    this.aboutNavItem = this.aboutNavItem.bind(this);
    this.lookupNavItem = this.lookupNavItem.bind(this);
    this.clickToGoToBikeLookup = this.clickToGoToBikeLookup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.allAPICalls = this.allAPICalls.bind(this);
    this.axiosUniqueBikesFromAPI = this.axiosUniqueBikesFromAPI.bind(this);
    this.displayErrorOrDisplayResults = this.displayErrorOrDisplayResults.bind(this);
    this.randomSubmit = this.randomSubmit.bind(this);
    this.whatIsDataHost = this.whatIsDataHost.bind(this);


  }
  // *******************************************************************
  // End of constructor
  // *******************************************************************


  // TODO: test this in production
    whatIsDataHost(){
      console.log("Hello from inside whatisHost() this.state.dataSource is:", this.state.dataSource)
      console.log("Hello from inside whatisHost() process.env.NODE_ENV is:", process.env.NODE_ENV)
    if (process.env.NODE_ENV === 'production')  {
      this.setState({dataSource: "https://bluebikes.herokuapp.com"})
      } else {
        this.setState({dataSource: "http://localhost:4000"})
      }
    }

  //  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  //  The API calls from the client.
  //  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

  // The result is limited by query max set in server.
  // To adjust, visit biketripqueries.js in the Router folder
  axiosAllBikeTripsFromAPI() {
    axios.get(this.state.dataSource)
      .then( (response) => {
        // console.log("axiosAllBikeTripsFromAPI", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

// Not using for anything at the moment, though keep b/c is useful
  axiosUniqueBikesFromAPI() {
    // axios.get(this.state.dataSource +`/uniquebikes`)
    //   .then( (response) => {
    //     // console.log("axiosUniqueBikesFromAPI:", response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }


 // Not using at the moment
 // Returns all trip data
  axiosAllBikeTripsByIdFromAPI() {
    // axios.get(`https://bluebikes.herokuapp.com/${this.state.bikeId}`)
    //   .then( (response) => {
    //     // console.log("axiosAllBikeTripsByIdFromAPI", response);
    //   })
    //   .catch( function (error) {
    //     console.log(error);
    //   });
  }

  axiosTotalNumTripsByIdFromAPI() {
    this.setState({loading: true})
    axios.get(this.state.dataSource +`/totaltrips/${this.state.bikeId}`)
      .then( (response) => {
        console.log("axiosTotalNumTripsByIdFromAPI", response.data[0].totaltrips);
        this.setState({totalTrips: response.data[0].totaltrips})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosWomanTripsByIdFromAPI() {
    axios.get(this.state.dataSource +`/womancyclisttrips/${this.state.bikeId}`)
      .then( (response) => {
        this.setState({womanCyclist: response.data[0].womancyclisttrips})
        // this.displayErrorOrDisplayResults()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosManTripsByIdFromAPI() {
    axios.get(this.state.dataSource +`/mancyclisttrips/${this.state.bikeId}`)
      .then( (response) => {
        this.setState({manCyclist: response.data[0].mancyclisttrips})
        // this.displayErrorOrDisplayResults()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosUnknownGenderTripsByIdFromAPI() {
    axios.get(this.state.dataSource +`/unknowngendercyclisttrips/${this.state.bikeId}`)
      .then( (response) => {
        this.setState({genderUnknownCyclist: response.data[0].unknowngendercyclisttrips})
        // this.displayErrorOrDisplayResults()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosFirstRideDateByIdFromAPI() {
    axios.get(this.state.dataSource +`/firstridedate/${this.state.bikeId}`)
      .then( (response) => {
        this.setState({firstRideDate: response.data[0].firstridedate})
        // this.displayErrorOrDisplayResults()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

    axiosFirstRideTimeByIdFromAPI() {
    axios.get(this.state.dataSource +`/firstridetime/${this.state.bikeId}`)
      .then( (response) => {
        this.setState({firstRideTime: response.data[0].firstridetime})
        // this.displayErrorOrDisplayResults()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosLastRideDateByIdFromAPI() {
    axios.get(this.state.dataSource +`/lastridedate/${this.state.bikeId}`)
      .then( (response) => {
        this.setState({lastRideDate: response.data[0].lastridedate})
        // this.displayErrorOrDisplayResults()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosLastRideTimeByIdFromAPI() {
  axios.get(this.state.dataSource +`/lastridetime/${this.state.bikeId}`)
    .then( (response) => {
      this.setState({lastRideTime: response.data[0].lastridetime})
      // this.displayErrorOrDisplayResults()
    })
    .catch(function (error) {
      console.log(error);
    });
}

  axiosTotalTimeByIdFromAPI() {
    axios.get(this.state.dataSource +`/totaltime/${this.state.bikeId}`)
      .then( (response) => {
        this.setState({totalTime: response.data[0].totaltimeonroad})
        // this.displayErrorOrDisplayResults()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // Here is where we check if the user inputed a bikeId with a trip history.
  // If user chooses a dud bikeId, they are prompted to choose an other number.
  // Also, the loading spinner is enabled & dissabled here
  axiosTotalDistanceByIdFromAPI() {
    axios.get(this.state.dataSource +`/totaldistance/${this.state.bikeId}`)
      .then( (response) => {
        this.setState({totalDistance: response.data[0].totaldistance})
        // this.displayErrorOrDisplayResults()
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

  axiosAvgDurationByIdFromAPI() {
    axios.get(this.state.dataSource +`/avgtripdurationbyid/${this.state.bikeId}`)
      .then( (response) => {
        this.setState({avgTripDurationById: response.data[0].avgtripdurationbyid})
        // this.displayErrorOrDisplayResults()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  axiosTotalStationsByIdFromAPI() {
    axios.get(this.state.dataSource +`/totalstations/${this.state.bikeId}`)
      .then( (response) => {
        this.setState({totalStations: response.data[0].totalstations})
        // this.displayErrorOrDisplayResults()
      })
      .catch( function (error) {
        console.log(error);
      });
  }

  axiosTopStationByIdFromAPI() {
    axios.get(this.state.dataSource +`/topstation/${this.state.bikeId}`)
      .then( (response) => {
       // console.log("axiosTotalStationsByIdFromAPI", response.data[0].startstationname);
        this.setState({topStation: response.data[0].startstationname})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

// Some of the simple queries all in one place
  axiosSimpleQueriesByIdFromAPI() {
    axios.get(this.state.dataSource +`/simplequeries/${this.state.bikeId}`)
      .then( (response) => {
        console.log(response.data[0].simplequeries);
        this.setState({totalTrips: response.data[0].totaltrips})
        this.setState({firstRideDate: response.data[0].firstridedate})
        this.setState({lastRideDate: response.data[0].lastridedate})
        this.setState({firstRideTime: response.data[0].firstridetime})
        this.setState({lastRideTime: response.data[0].lastridetime})
        this.setState({totalTime: response.data[0].totaltimeonroad})
        this.setState({totalDistance: response.data[0].totaldistance})
        this.setState({avgTripDurationById: response.data[0].avgtripdurationbyid})
        this.setState({totalStations: response.data[0].totalstations})
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
  }

  //  ==================================================================
  //  Random bikeId number generator - in progress
  //  ==================================================================
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
  //  NOT USING, HAS PROBLEMS.
  //  Here is where we check if the user inputed a bikeId with a trip history.
  //  If user chooses a dud bikeId, they are prompted to choose an other number.
  //  Also, here is where we enable the spinner. When there's a response, (either
  //  successful on not), loading is set to false, which dissables the spinner.
  //  ==================================================================
  displayErrorOrDisplayResults() {
    // let response = "response.data[0].firstridedate == 0"
    // console.log(this.response)
    // if (this.response == 0) {
    //   this.setState({loading: false});
    //   this.setState({bikeIdValid: false});
    //   this.showErrorMessage();
    //   } else {
    //     this.setState({bikeIdValid: true})
    //     this.setState({loading: false})
    //     this.setState({bikeResultsPageDisplay: {'display': true}})
    //     this.setState({bikeLookupPageDisplay: {'display': 'none'}})
    //   }
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
          randomBikeId={this.state.randomBikeId}
          randomSubmit={this.randomSubmit}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          randomSubmit={this.randomSubmit}
          />

        <BikeResults
          parent_state={this.state}
          clickToGoToBikeLookup={this.clickToGoToBikeLookup}
          />

      </div>
    );
  }
}
