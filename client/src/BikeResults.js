import React, { Component } from "react";


export default class BikeResults extends Component {
  render() {

  // Some variables to make this page easier to read.
  // It was getting too crowded down below with all these this.props...
  const redBikeId = this.props.parent_state.bikeId
  const totalTrips = this.props.parent_state.totalTrips
  const totalTime = this.props.parent_state.totalTime
  const totalDistance = this.props.parent_state.totalDistance
  const avgTripDurationById = this.props.parent_state.avgTripDurationById
  const womanCyclist = this.props.parent_state.womanCyclist
  const manCyclist = this.props.parent_state.manCyclist
  const genderUnknownCyclist = this.props.parent_state.genderUnknownCyclist
  const percentWomanCyclist = Math.round(womanCyclist / totalTrips * 100)
  const percentManCyclist = Math.round(manCyclist / totalTrips * 100)
  const percentGenderUnknownCyclist = Math.round(genderUnknownCyclist / totalTrips * 100)
  const firstRideDate = this.props.parent_state.firstRideDate
  const firstRideTime = this.props.parent_state.firstRideTime
  const lastRideDate = this.props.parent_state.lastRideDate
  const lastRideTime = this.props.parent_state.lastRideTime
  const totalStations = this.props.parent_state.totalStations
  const topStation = this.props.parent_state.topStation


    return (
      <div
        style={this.props.parent_state.bikeResultsPageDisplay}
        >

        <h2>
          Bicycle id: <span className="big-bike-id"> {redBikeId} </span>
        </h2>

        <h3>Trips:</h3>
        <p>
          From January to June 2018, this bicycle has been taken on{" "}
          <span className="citibike-data"> {totalTrips} </span> trips. The average Citi Bike has been on <span className="citibike-data">575</span> trips during the same period of time.
        </p>
        <p>
          It has been ridden for aproximately{" "}
          <span className="citibike-data">{totalTime}</span> hours and
          travelled aproximately <span className="citibike-data">{totalDistance}</span> miles, based on an assumed speed of 7.45 miles per hour. The average Citi Bike has been ridden for aproximately <span className="citibike-data">132</span> hours and travelled aproximately <span className="citibike-data"> 983.4 </span> miles.
        </p>
        <p>
          The average trip on this bicycle lasts{" "}
          <span className="citibike-data">{avgTripDurationById}</span> minutes. The average Citi Bike trip lasts{" "}
          <span className="citibike-data">13</span> minutes.
        </p>

        <h3>Ride Dates:</h3>
        <p>
          It had its first ride of the year on
          <span className="citibike-data"> {firstRideDate}</span> at <span className="citibike-data">{firstRideTime}</span>.
          <br/>
          Its last recorded ride was on<span className="citibike-data"> {lastRideDate}</span> at <span className="citibike-data">{lastRideTime}</span>.
        </p>

        <h3>Stations:</h3>
        <p>
          It has visited{" "}<span className="citibike-data">{totalStations}</span>{" "}
          stations. The most frequent station it has visited is{" "}
          <span className="citibike-data">{topStation}</span>. The most popular station in the system is <span className="citibike-data">Pershing Square North</span>.
        </p>

        <h3>Gender:</h3>
        <p>
          <span className="citibike-data"> {percentWomanCyclist}%</span> of trips were taken by women (<span className="citibike-data">{womanCyclist}</span>) and <span className="citibike-data"> {percentManCyclist}% </span> of trips were taken by men (<span className="citibike-data">{manCyclist}</span>). The gender of the cyclist is unknown for <span className="citibike-data"> {percentGenderUnknownCyclist}% </span> of trips (<span className="citibike-data">{genderUnknownCyclist}</span>). The average Citi Bike is taken on <span className="citibike-data">22%</span> trips by women and <span className="citibike-data">69%</span> by men.
        </p>


        <form>
          <input
            className="button"
            type="button"
            value="look up an other bicycle"
            onClick={this.props.clickToGoToBikeLookup} />
        </form>

      </div>
    );
  }
}


// The average Citi Bike has visited <span className="citibike-data">x stations</span>.
