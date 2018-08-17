import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Home extends Component {
	render() {
		return (
			<div>
				<div className="second-search">
					<NavLink to="/results">
						<button>Find a professor</button>
					</NavLink>
					<NavLink to="/results">
						<button>Find a school</button>
					</NavLink>
					<NavLink to="/results">
						<button>Rate a professor</button>
					</NavLink>
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