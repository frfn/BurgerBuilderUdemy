import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Containers/App/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

// Redux
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";

// Redux Thunk
import thunk from "redux-thunk";

// Reducer
import burgerBuilderReducer from "./Store/reducers/burgerBuilder";
import orderReducer from "./Store/reducers/order";

// You can put inside variable for more clean look
/* const app = (
  <BrowserRouter>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</BrowserRouter>
); */

// composed middleware/enhancers
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// combining reducer
const rootReducer = combineReducers({
	burgerBuilder: burgerBuilderReducer,
	order: orderReducer
})

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
