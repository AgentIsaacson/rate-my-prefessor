import React, { Component } from "react";
import { connect, dispatch } from "react-redux";
import { fetchProfessor } from "../actions";

class Results extends Component {
	constructor(props) {
		super(props);
		this.renderProfessor = this.renderProfessor.bind(this);

		this.state = {};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.props.fetchProfessor();
	}

	renderProfessor(professor) {
		return (
			<div key={professor.id} className="professors-container">
				<div className="professors">
					{/* <img src={professor.img}/> */}
					{/* <img src="http://via.placeholder.com/350x150"/> */}
					<div>Title: {professor.name}</div>
					<div>Description: {professor.school}</div>
				</div>
			</div>
		);
	}

	mapStateToProps(state) {
		return { professors: state.professors };
	}

	mapDispatchToProps(dispatch) {
		return {
			fetchProfessor: () => {
				dispatch(fetchProfessor());
			}
		};
	}
	handleSubmit(event) {
		event.preventDefault();
		if (!event.target.checkValidity()) {
			this.setState({
				invalid: true,
				displayErrors: true
			});
			return;
		}
		const form = event.target;
		const data = new FormData(form);

		for (let name of data.keys()) {
			const input = form.elements[name];
			const parserName = input.dataset.parse;
			console.log("parser name is", parserName);
			if (parserName) {
				const parsedValue = inputParsers[parserName](data.get(name));
				data.set(name, parsedValue);
			}
		}

		this.setState({
			res: stringifyFormData(data),
			invalid: false,
			displayErrors: false
		});

		// fetch('/api/form-submit-url', {
		//   method: 'POST',
		//   body: data,
		// });
	}

	stringifyFormData(fd) {
		const data = {};
		for (let key of fd.keys()) {
			data[key] = fd.get(key);
		}
		return JSON.stringify(data, null, 2);
	}
	// a;oidfghjalsodifhjaipsdufhaliusdhfgliaurhsgliuaerhgiuaerhfgpiuaerhwf;giuaehgiauehgl;aie

	render() {
		const { res, invalid, displayErrors } = this.state;
		return (
			<div>
				{this.props.professors.map(this.renderProfessor)}

				<div>
					<form
						onSubmit={this.handleSubmit}
						noValidate
						className={displayErrors ? "displayErrors" : ""}
					>
						<label htmlFor="name">Username:</label>
						<input name="name" type="text" data-parse="uppercase" />

						<label htmlFor="birthdate">Birthdate:</label>
						<input
							name="school"
							type="text"
							data-parse="date"
							placeholder="MM/DD//YYYY"
							pattern="\d{2}\/\d{2}/\d{4}"
							required
						/>

						<button>Send data!</button>
					</form>

					<div className="res-block">
						{invalid && <Results text="Form is not valid" />}
						{!invalid &&
							res && (
								<div>
									<h3>Transformed data to be sent:</h3>
									<pre>FormData {res}</pre>
								</div>
							)}
					</div>
				</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Results);
