/**
 * Created by ia.busarov on 19.06.2017.
 */
import { Dispatch } from "redux";
import { createAction } from "redux-actions";
import {ActionCreator} from "react-redux";
import sleep from "sleep-es6";

export const SET_COUNTER = "SET_COUNTER";
export const COUNTER_LOADING = "COUNTER_LOADING";
export const SET_SECOND_COUNTER = "SET_SECOND_COUNTER";
export const SECOND_COUNTER_LOADING = "SECOND_COUNTER_LOADING";

export type counterAction = ISetCounter | ICounterLoading;
export type secondCounterAction = ISetSecondCounter | ISecondCounterLoading;

export interface ISetCounter {
    type: typeof SET_COUNTER;
    payload: number;
}

export interface ISetSecondCounter {
    type: typeof SET_SECOND_COUNTER;
    payload: number;
}

export interface ICounterLoading {
    type: typeof COUNTER_LOADING;
    payload: boolean;
}

export interface ISecondCounterLoading {
    type: typeof SECOND_COUNTER_LOADING;
    payload: boolean;
}

export const setCounterLoading = createAction<boolean>(COUNTER_LOADING);
export const setSecondCounterLoading = createAction<boolean>(SECOND_COUNTER_LOADING);
export const setCounter = createAction<number>(SET_COUNTER);
export const setSecondCounter = createAction<number>(SET_SECOND_COUNTER);

export const setCounterAsync = (value: number) => {
    return (dispatch: Dispatch<counterAction>) => {
        dispatch(setCounterLoading(true));
        setTimeout(() => {
            dispatch(setCounter(value));
            dispatch(setCounterLoading(false));
        }, 1000);
    };
};

export const setSecondCounterAsync = (value: number) => {
    return (dispatch: Dispatch<secondCounterAction>) => {
        dispatch(setSecondCounterLoading(true));
        setTimeout(() => {
            dispatch(setSecondCounter(value));
            dispatch(setSecondCounterLoading(false));
        }, 1000);
    };
};

