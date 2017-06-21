/**
 * Created by ia.busarov on 19.06.2017.
 */
import { Dispatch } from "redux";
import { createAction, Action } from "redux-actions";
import { ActionCreator } from "react-redux";
import sleep from "sleep-es6";

export const SET_COUNTER = "SET_COUNTER";
export const COUNTER_LOADING = "COUNTER_LOADING";

export type counterAction = ISetCounter | ISetLoading;

export interface ICounter {
    value: number;
    id: number;
}
export interface ILoading {
    loading: boolean;
    id: number;
}

export type ISetCounter = Action<ICounter>;
export type ISetLoading = Action<ILoading>;

export const setCounter = createAction<ICounter>(SET_COUNTER);
export const setCounterLoading = createAction<ILoading>(COUNTER_LOADING);

export const setCounterAsync = (value: number, id: number) => {
    return (dispatch: Dispatch<counterAction>) => {
        dispatch(setCounterLoading({ loading: true, id }));
        setTimeout(() => {
            dispatch(setCounter({ value, id }));
            dispatch(setCounterLoading({ loading: false, id }));
        }, 1000);
    };
};

