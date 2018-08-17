import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import reducers from "./reducers";

import thunk from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
import AddProfessor from "./components/addProfessor";

import "bootstrap/dist/css/bootstrap.css";
import "./style/main.scss";

import Home from "./components/home";
import Results from "./components/results";
import Professors from "./components/professors";

function main() {
	ReactDOM.render(
		<Provider store={createStoreWithMiddleware(reducers)}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/results" component={Results} />
					<Route exact path="/professors" component={Professors} />
					<Route exact path="/add-a-professor" component={AddProfessor} />
				</Switch>
			</BrowserRouter>
		</Provider>,
		document.querySelector(".app-wrapper")
	);
}

document.addEventListener("DOMContentLoaded", main);
