import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class Professor extends Component {
	render() {
		return (
			<div id="wrapper">
				<NavLink to="/">Rate My Professor</NavLink>

				<div className="header-img">
					<div className="columns">
						<h2>PROF MAD LIB</h2>
						<div className="pin">
							<img
								className="front"
								src="https://www.ragnbonemanmusic.com/wp-content/themes/ragnboneman/assets/img/ragsold.jpg"
								alt="professor"
							/>
						</div>
					</div>
				</div>
				<div className="attributes">
					<li>
						<b>Department:</b> COMPUTER SCIENCE
					</li>
					<li>
						<b>School:</b> TECHNOLOGY
					</li>
					<li>
						<b>Height:</b> 6ft5
					</li>
					<li>
						<b>Favorite Book:</b> The Gods Must Be Crazy
					</li>
					<li>
						<b>Office:</b> CB 311 - E
					</li>
					<li>
						<b>Email:</b> madlib@bottega.edu
					</li>
					<li>
						<b>Mail Code:</b> 133
					</li>
					<li>
						<b>Phone:</b> (801)-777-7777
					</li>
					<li>
						<b>Height:</b> 6ft5
					</li>
				</div>
			</div>
		);
	}
}

export default Professor;
