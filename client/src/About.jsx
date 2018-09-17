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

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet lacus nisl. Sed et tortor odio. Aliquam tortor neque, facilisis a ipsum sit amet, vestibulum suscipit eros. Nullam malesuada euismod dui, in dapibus ante. Nam tincidunt velit non ante fermentum tristique. Morbi suscipit varius felis, interdum finibus magna. Pellentesque et diam nunc.</p>

    <p>Pellentesque fringilla ullamcorper tortor nec faucibus. Aenean faucibus vel ante sed imperdiet. Proin congue rutrum mi. Aliquam erat volutpat. Mauris lectus tellus, bibendum id dui at, aliquam ultricies turpis. Suspendisse potenti. Integer vel scelerisque ligula. Maecenas cursus sapien vel mi vehicula faucibus. Aenean consequat magna quis mattis posuere.</p>

    <ContinueToBikeLookupButton
      clickToGoToBikeLookup={this.props.clickToGoToBikeLookup}/>

 </div>

    );
  }
}
