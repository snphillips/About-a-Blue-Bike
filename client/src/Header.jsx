import React, { Component } from 'react';


export default class Header extends Component {


  render() {
    return (

      <div className="Header">

        <div>
        <h1> About a Blue Bike </h1>
          <nav>
            <ul id="topnav">
              <li className="nav-item" id="home-nav-item" onClick={this.props.homeNavItem}>Home</li>
              <li className="nav-item" id="lookup-nav-item" onClick={this.props.lookupNavItem}>Bicycle Lookup</li>
            </ul>
          </nav>
        </div>

        <hr/>

      </div>

    );
  }
}



        // <li id="nav-item" onClick={this.props.aboutNavItem}>About</li>
