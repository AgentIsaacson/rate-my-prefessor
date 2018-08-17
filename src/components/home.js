import React, { Component } from "react";
import Results from "./results";

export default class Home extends Component {
<<<<<<< HEAD
	render() {
		return (
			<div>
				<Results />
			</div>
		);
	}
=======
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
>>>>>>> c53b0a3839d4f7f540db76bb600d84229a58cbd1
}
