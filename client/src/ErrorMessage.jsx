import React, { Component } from 'react';

export default class ErrorMessage extends Component {
  render() {

    // This displays a red alert when users chooses a dud number
    // in the BikeSearchForm.js
    // First some javascript to determinie if number is a dud or not.
    // Then, render the script in the return.

    let error_message
    if (this.props.parent_state.bikeIdValid === false) {
      error_message =
        <div className="error_message">
          No trips for that bicycle.<br />
          Try an other number.
        </div>
    } else {
        error_message = ""
    }


    return (

      error_message

    );
  }
}
