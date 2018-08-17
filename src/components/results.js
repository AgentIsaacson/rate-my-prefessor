import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import Typing from 'react-typing-animation';

import Professors from "./professors";

let professors = [
	{
		id: 0,
		name: "Mark",
		school: "Lehi",
		class: "flying",
		rating: "4",
		class: "Hangry Management"
	},
	{
		id: 1,
		name: "Bob",
		school: "Home School",
		class: "Socializing",
		rating: "3"
	},
	{
		id: 2,
		name: "Sue",
		school: "Britian",
		class: "Self Defense",
		rating: "5"
	},
	{
		id: 3,
		name: "Xavier",
		school: "Gifted Youngsters",
		class: "Anger Managment",
		rating: "4"
	},
	{
		id: 4,
		name: "Wold",
		school: "Bottega",
		class: "How to be a Super Hero",
		rating: "5"
	},
	{
		id: 5,
		name: "Green",
		school: "Bottega",
		class: "How to be a Super Villian",
		rating: "0/5"
	},
	{
		id: 6,
		name: "Mick",
		school: "Lehi",
		class: "fly",
		rating: "0",
		class: "Management"
	},
	{
		id: 7,
		name: "Bill",
		school: "School",
		class: "PE",
		rating: "2"
	},
	{
		id: 8,
		name: "Sally",
		school: "Spanish Fork",
		class: "Spanglish",
		rating: "5"
	},
	{
		id: 9,
		name: "Nick",
		school: "Gifted Youngsters",
		class: "Computers",
		rating: "4"
	},
	{
		id: 10,
		name: "Sam",
		school: "Graphics",
		class: "3D Animation",
		rating: "5"
	},
	{
		id: 11,
		name: "Grayson",
		school: "Institute",
		class: "Math",
		rating: "5"
	}
];

export default class Results extends Component {
	render() {
		return (
			<div className="results-wrapper">
				<Professors professors={professors} />
				<NavLink to="/add-a-professor">Add a Professor</NavLink>
			</div>
		);
	}
}
