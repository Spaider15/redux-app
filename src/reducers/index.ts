/**
 * Created by ia.busarov on 19.06.2017.
 */
import { SET_COUNTER, SET_SECOND_COUNTER, COUNTER_LOADING, SECOND_COUNTER_LOADING, counterAction, secondCounterAction } from "../actions";
import { IStore } from "../types";
import { combineReducers } from "redux";

const initialState: IStore = {
    counter: {
        value: 0,
        loading: false,
    },
    secondCounter: {
        value: 0,
        loading: false,
    },
};

function setCounter(state = initialState.counter, action: counterAction) {
    switch (action.type) {
        case SET_COUNTER:
            return { ...state, value: action.counter  };
        case COUNTER_LOADING:
            return { ...state, loading: action.loading };
        default:
            return state;
    }
}

function setSecondCounter(state = initialState.secondCounter, action: secondCounterAction) {
    switch (action.type) {
        case SET_SECOND_COUNTER:
            return { ...state, value: action.counter  };
        case SECOND_COUNTER_LOADING:
            return { ...state, loading: action.loading };
        default:
            return state;
    }
}

export default combineReducers<IStore>({
    counter: setCounter,
    secondCounter: setSecondCounter,
});
