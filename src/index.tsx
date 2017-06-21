import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import * as promiseMiddleware from "redux-promise";
import thunkMiddleware from "redux-thunk";
import App from "./containers/App";
import Reducer from "./reducers";
import { IStore } from "./types";

// tslint:disable no-namespace interface-name
declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}

const store = createStore(Reducer, applyMiddleware(thunkMiddleware, promiseMiddleware, logger));

render(
    <Provider store={store}>
            <App />
    </Provider>,
    document.getElementById("root"),
);
