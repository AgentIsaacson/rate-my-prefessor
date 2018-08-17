import { FETCH_PROFESSORS } from "./types";

import axios from "axios";

export function fetchProfessor() {
	return function(dispatch) {
		axios.get("http://localhost:5000/professors").then((response) => {
			dispatch({
				type: FETCH_PROFESSORS,
				payload: response.data
			});
		});
	};
}
