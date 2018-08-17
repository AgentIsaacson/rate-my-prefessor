import React, { Component } from 'react';
import Typing from 'react-typing-animation';

export default class Home extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
        <div className="searchbar">
          <input type="text" placeholder="SEARCH FOR A PROFESSOR OR SCHOOL"></input>
        </div>
        <div className="second-search">
          <button>Find a professor</button>
          <button>Find a school</button>
          <button>Rate a professor</button>
        </div>

        <div className="body">
          <p className="search">Search.</p>
          <p className="rate">Rate.</p>
          <p className="know">Know.</p>
        </div>
      </div>

      
    );
  }
}
