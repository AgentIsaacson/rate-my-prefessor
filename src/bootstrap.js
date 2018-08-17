import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import reducers from "./reducers";

import thunk from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
import AddProfessor from './components/addProfessor';


import "bootstrap/dist/css/bootstrap.css";
import "./style/main.scss";

import Home from "./components/home";
import Results from "./components/results";
import Professor from "./components/professor";

function main() {
	ReactDOM.render(
		<Provider store={createStoreWithMiddleware(reducers)}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/results" component={Results} />
					<Route exact path="/professor" component={Professor} />
					{/* <Route exact path="/add-a-professor" component={} /> */}
				</Switch>
			</BrowserRouter>
		</Provider>,
		document.querySelector(".app-wrapper")
	);
}

document.addEventListener("DOMContentLoaded", main);
