import React, { Component } from 'react';


export default class Header extends Component {


  render() {
    return (

  <div className="Header">

  <div>
  <h1> About a Blue Bike </h1>
    <nav>
      <ul id="topnav">
        <li id="nav-item"><a href="/">Home</a></li>
        <li id="nav-item"><a href="/about">About</a></li>
        <li id="nav-item"><a href="/bicyclelookuppage">Bicycle Lookup</a></li>
      </ul>
    </nav>
  </div>

  <hr/>

  </div>
    );
  }
}
