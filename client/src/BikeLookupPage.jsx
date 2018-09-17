import React, { Component } from 'react';
import AutoBikeIdPick from './AutoBikeIdPick';
import BikeSearchForm from './BikeSearchForm';


export default class BikeLookupPage extends Component {


  render() {
    return (

    <div
      className="bikeLookup"
      style={this.props.parent_state.bikeLookupPageDisplay}
      >

      <h2>Bicycle Lookup</h2>

      <p>Every Citi Bike has a distinct id number.</p>
      <p>Input a number between 14529 and 33699 in the field below.</p>
      <p>Not all bikes are active so you may have to choose several numbers before you find an active bike.</p>
    {/*  <p>Too lazy to pick a number? Press the random bike id generator button.</p> */}

      <br/>

   {/*   <AutoBikeIdPick
        handleClick={this.props.randomBikeIdGenerator}
        randomSubmit={this.props.randomSubmit}
      />   */}

      <BikeSearchForm
        parent_state={this.props.parent_state}
        loading={this.props.loading}
        bikeIdValid={this.props.bikeIdValid}
        handleChange={this.props.handleChange}
        handleSubmit={this.props.handleSubmit}
      />
    </div>
    );
  }
}

 // <img src="https://i.imgur.com/W36W3NL.png" id="lookupbluebike" alt="Citibike drawing"/>


