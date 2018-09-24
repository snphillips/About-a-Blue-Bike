import React, { Component } from "react";
import ReactSpinner from './ReactSpinner';
import ErrorMessage from './ErrorMessage';

export default class BikeSearchForm extends Component {

  render() {

    // The following adds a red border to the input field if the user
    // chooses a bike that doesn't have a ride history. View index.css
    // to see the no-trips-bike-id class.
    let inputErrorClass
    if (this.props.parent_state.bikeIdValid === false) {
      inputErrorClass = "no-trips-bike-id"
    } else { inputErrorClass =" "}

    return (
      <div
        id="bikeidform"
        >

        <form>

          <label>
            <input
              id="bike_lookup_field"
              placeholder="bike id"
              className={inputErrorClass}
              type="number"
              min="14529"
              max="33699"
              value={this.props.parent_state.bikeId}
              onChange={this.props.handleChange}
              />
            <ErrorMessage parent_state={this.props.parent_state} />
          </label>


          <br />

          <input
            className="button"
            type="submit"
            value="submit"
            placeholder="submit"
            onClick={this.props.handleSubmit}
          />
          <ReactSpinner loading={this.props.loading} />
          </form>



      </div>
    );
  }
}
