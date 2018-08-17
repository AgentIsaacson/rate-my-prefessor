import React, { Component } from "react";
import Professor from "./professor";

class Professors extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: ""
		};
	}

	updateSearch(event) {
		this.setState({ search: event.target.value });
	}

	render() {
		let filteredProfessors = this.props.professors.filter((professor) => {
			return (
				professor.name
					.toLowerCase()
					.indexOf(this.state.search.toLowerCase()) !== -1 ||
				professor.school
					.toLowerCase()
					.indexOf(this.state.search.toLowerCase()) !== -1 ||
				professor.rating
					.toLowerCase()
					.indexOf(this.state.search.toLowerCase()) !== -1 ||
				professor.class
					.toLowerCase()
					.indexOf(this.state.search.toLowerCase()) !== -1
			);
		});

		return (
			<div>
				<div className="search-container">
					<h1 className="h1style">Rate My Professor</h1>
					<input
						className="search-bar"
						type="text"
						placeholder="Search a professor"
						value={this.state.search}
						onChange={this.updateSearch.bind(this)}
					/>
				</div>
				<ul>
					{filteredProfessors.map((professor) => {
						return <Professor professor={professor} key={professor.id} />;
					})}
				</ul>
			</div>
		);
	}
}

export default Professors;
