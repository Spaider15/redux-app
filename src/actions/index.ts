/**
 * Created by ia.busarov on 19.06.2017.
 */
import { Dispatch } from "redux";

export const SET_COUNTER = "SET_COUNTER";
export const COUNTER_LOADING = "COUNTER_LOADING";
export const SET_SECOND_COUNTER = "SET_SECOND_COUNTER";
export const SECOND_COUNTER_LOADING = "SECOND_COUNTER_LOADING";

export type counterAction = ISetCounter | ICounterLoading;
export type secondCounterAction = ISetSecondCounter | ISecondCounterLoading;

export interface ISetCounter {
    type: typeof SET_COUNTER;
    counter: number;
}

export interface ISetSecondCounter {
    type: typeof SET_SECOND_COUNTER;
    counter: number;
}

export interface ICounterLoading {
    type: typeof COUNTER_LOADING;
    loading: boolean;
}

export interface ISecondCounterLoading {
    type: typeof SECOND_COUNTER_LOADING;
    loading: boolean;
}

export const setCounterLoading = (value: boolean): ICounterLoading => {
    return {
        type: COUNTER_LOADING,
        loading: value,
    };
};

export const setSecondCounterLoading = (value: boolean): ISecondCounterLoading => {
    return {
        type: SECOND_COUNTER_LOADING,
        loading: value,
    };
};

export const setCounter = (value: number): ISetCounter => {
    return {
        type: SET_COUNTER,
        counter: value,
    };
};

export const setSecondCounter = (value: number): ISetSecondCounter => {
    return {
        type: SET_SECOND_COUNTER,
        counter: value,
    };
};

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

