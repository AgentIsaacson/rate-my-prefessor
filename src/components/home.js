import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <div>
            <a className="active" href="#">Rate My Professor</a>
          </div>
          <div>
            <input type="text" placeholder="SEARCH FOR A PROFESSOR OR SCHOOL"></input>
          </div>
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
