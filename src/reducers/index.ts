/**
 * Created by ia.busarov on 19.06.2017.
 */
import {
    SET_COUNTER, SET_SECOND_COUNTER, COUNTER_LOADING, SECOND_COUNTER_LOADING,
    ISetCounter, ISecondCounterLoading, ISetSecondCounter
} from "../actions";
import { IStore, ICounter, ISecondCounter } from "../types";
import { combineReducers } from "redux";
import {handleAction, combineActions, handleActions} from "redux-actions";

const initialState: IStore = {
    counter: {
        value: 0,
        loading: false,
    },
    secondCounter: {
        value: 2,
        loading: false,
    },
};

const Counter = handleActions<ICounter>({
    [SET_COUNTER]: (state: ICounter, action: ISetCounter) => {
        console.log(`action: ${SET_COUNTER}`);
        return { ...state, value: action.payload };
    },
    [COUNTER_LOADING]: (state: ICounter, action: ISecondCounterLoading) => {
        console.log(`action: ${COUNTER_LOADING}`);
        return { ...state, loading: action.payload };
    },
}, initialState.counter);

const SecondCounter = handleActions<ISecondCounter>({
    [SET_SECOND_COUNTER]: (state: ISecondCounter, action: ISetSecondCounter) => {
        return { ...state, value: action.payload };
    },
    [SECOND_COUNTER_LOADING]: (state: ISecondCounter, action: ISetSecondCounter) => {
        return { ...state, loading: action.payload };
    },
}, initialState.secondCounter);

export default combineReducers<IStore>({
    counter: Counter,
    secondCounter: SecondCounter,
});
