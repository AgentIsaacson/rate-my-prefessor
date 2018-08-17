import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Professor extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="wrapper">
				<NavLink to="/professor">
					<div className="professor">
						<div className="professor">
							Professor: {this.props.professor.name}
						</div>
						<div className="school">School: {this.props.professor.school}</div>
						<div className="school">class: {this.props.professor.class}</div>
						<div className="rating">Rating: {this.props.professor.rating}</div>
					</div>
				</NavLink>
			</div>
		);
	}
}
