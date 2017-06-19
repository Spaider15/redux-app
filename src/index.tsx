import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./containers/App";
import counters from "./reducers";
import { IStore } from "./types";

// tslint:disable no-namespace interface-name
declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}

const store = createStore(counters, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
            <App />
    </Provider>,
    document.getElementById("root"),
);
