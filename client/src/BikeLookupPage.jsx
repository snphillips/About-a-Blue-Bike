import React, { Component } from 'react';
import AutoBikeIdPick from './AutoBikeIdPick';
import BikeSearchForm from './BikeSearchForm';


export default class BikeLookupPage extends Component {


  render() {
    return (

    <div
      className="bikeLookup"
      style={this.props.parentState.bikeLookupPageDisplay}
      >

      <h2>Bicycle Lookup</h2>

      <p>Every Citi Bike has a distinct id number.</p>
      <p>Input a number between 14529 and 33699 in the field below.</p>
      <p>Not all bikes are active so you may have to choose several numbers before you find an active bike.</p>
      <p>You can also press the random bike id generator button.</p>

      <AutoBikeIdPick
        parentState={this.props.parentState}
        randomSubmit={this.props.randomSubmit}
        randomBikeId={this.props.randomBikeId}
      />

      <BikeSearchForm
        parentState={this.props.parentState}
        loading={this.props.loading}
        bikeIdValid={this.props.bikeIdValid}
        handleChange={this.props.handleChange}
        handleSubmit={this.props.handleSubmit}
        randomBikeId={this.props.randomBikeId}
      />
    </div>
    );
  }
}

 // <img src="https://i.imgur.com/W36W3NL.png" id="lookupbluebike" alt="Citibike drawing"/>


