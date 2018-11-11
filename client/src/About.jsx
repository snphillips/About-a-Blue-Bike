import React, { Component } from 'react'
import ContinueToBikeLookupButton from './ContinueToBikeLookupButton'

export default class About extends Component {


  render() {
    return (

  <div
    className="about"
    style={this.props.parent_state.aboutDisplay}
  >

    <h2>About</h2>


    <p>There are currently 12,000 blue Citi Bikes on the road and they've been on more than 50 million rides.</p>

    <p>Citi Bike shares its ride data every month in the form of csv files. View the dataset <a href='https://www.citibikenyc.com/system-data' target="_blank" rel="noopener noreferrer">here.</a></p>

    <ContinueToBikeLookupButton
      clickToGoToBikeLookup={this.props.clickToGoToBikeLookup}/>

 </div>

    );
  }
}
