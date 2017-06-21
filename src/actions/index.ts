/**
 * Created by ia.busarov on 19.06.2017.
 */
import { Dispatch } from "redux";
import { createAction, Action } from "redux-actions";
import { ActionCreator } from "react-redux";
import sleep from "sleep-es6";

export const SET_COUNTER = "SET_COUNTER";
export const COUNTER_LOADING = "COUNTER_LOADING";
export const SET_SECOND_COUNTER = "SET_SECOND_COUNTER";
export const SECOND_COUNTER_LOADING = "SECOND_COUNTER_LOADING";

export type counterAction = ISetCounter | ISetLoading;

export type ICounter = number;
export type ILoading = boolean;

export type ISetCounter = Action<ICounter>;
export type ISetLoading = Action<ILoading>;

export const setCounter = createAction<ICounter>(SET_COUNTER);
export const setSecondCounter = createAction<ICounter>(SET_SECOND_COUNTER);
export const setCounterLoading = createAction<ILoading>(COUNTER_LOADING);
export const setSecondCounterLoading = createAction<ILoading>(SECOND_COUNTER_LOADING);

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
    return (dispatch: Dispatch<counterAction>) => {
        dispatch(setSecondCounterLoading(true));
        setTimeout(() => {
            dispatch(setSecondCounter(value));
            dispatch(setSecondCounterLoading(false));
        }, 1000);
    };
};

