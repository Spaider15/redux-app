/**
 * Created by ia.busarov on 19.06.2017.
 */
import { SET_COUNTER, SET_SECOND_COUNTER, ISetCounter, ISetSecondCounter } from "../actions";
import { IStore } from "../types";
import { combineReducers } from "redux";

const initialState: IStore = {
    counter: 0,
    secondCounter: 0,
};

function setCounter(state = 0, action: ISetCounter) {
    switch (action.type) {
        case SET_COUNTER:
            return action.counter;
        default:
            return state;
    }
}

function setSecondCounter(state = 0, action: ISetSecondCounter) {
    switch (action.type) {
        case SET_SECOND_COUNTER:
            return action.counter;
        default:
            return state;
    }
}

export default combineReducers<IStore>({
    counter: setCounter,
    secondCounter: setSecondCounter,
});
