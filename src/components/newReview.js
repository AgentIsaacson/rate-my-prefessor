import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NewReview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			courseTaken: "",
			description: "",
			review: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		const target = event.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		alert(
			"Professor Name:     " +
				this.state.courseTaken +
				"        Description:     " +
				this.state.description +
				"       Review:        " +
				this.state.review
		);
		// return(
		// 	<div>
		// 		`$
		// 		{"Professor Name:     "}
		// 		this.state.courseTaken` `$
		// 		{"Description:     "}
		// 		this.state.description` `$
		// 		{"Review:     "}
		// 		this.state.review`
		// 	</div>
		// );
	}
	render() {
		return (
			<div>
				<div className="form">
					<div className="title">Add a New Professor</div>
					<div className="container">
						<form className="form" onSubmit={this.handleSubmit}>
							<label className="courseTaken">Professor </label>
							<div className="control">
								<input
									className="input"
									placeholder="Name"
									type="text"
									name="courseTaken"
									value={this.state.fullname}
									onChange={this.handleChange}
								/>
							</div>
							<label className="Description">Course Taken From Teacher</label>
							<div className="control">
								<input
									className="input"
									placeholder="University"
									type="text"
									name="Description"
									value={this.state.description}
									onChange={this.handleChange}
								/>
							</div>
							<label className="Review">Rating (1-5)</label>
							<div className="control">
								<input
									className="input"
									placeholder="Class"
									type="Review"
									name="Review"
									value={this.state.review}
									onChange={this.handleChange}
								/>
							</div>
							<div className="portfolioButton">
								<button id="submit"> Submit</button>
							</div>
						</form>
					</div>
					<NavLink to="/professor">
						<button className="back-to-results">Back to professor</button>
					</NavLink>
				</div>
			</div>
		);
	}
}
export default NewReview;
