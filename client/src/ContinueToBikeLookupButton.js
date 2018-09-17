import React, { Component } from 'react';

export default class ContinueToBikeLookupButton extends Component {
  render() {
    return (

  <div>
    <form>
      <input
        className="button"
        type="button"
        value="continue to bike lookup tool"
        onClick={this.props.clickToGoToBikeLookup} />
    </form>
  </div>

    );
  }
}

