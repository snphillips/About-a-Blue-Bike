import React, { Component } from 'react';
import ContinueToBikeLookupButton from './ContinueToBikeLookupButton';


export default class Home extends Component {

  render() {
    return (

  <div
    className="home"
    style={this.props.parentState.homeDisplay} >

    <h2>Home</h2>

    <p>About a Blue Bike is a tool to look up interesting facts about individual bicycles in New York City's Citi Bike bike share system.</p>

    <p>There are currently 12,000 blue Citi Bikes on the road and they've been on more than 50 million rides.</p>

    <p>Citi Bike shares its ride data every month in the form of csv files. View the dataset <a href='https://www.citibikenyc.com/system-data' target="_blank" rel="noopener noreferrer">here.</a></p>

    <ContinueToBikeLookupButton
      clickToGoToBikeLookup={this.props.clickToGoToBikeLookup}/>

    <img src="https://i.imgur.com/v7RPbmt.png" alt="Citibike drawing" id="mainpagebluebike"/>

  </div>
    );
  }
}
