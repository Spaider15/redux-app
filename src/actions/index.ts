/**
 * Created by ia.busarov on 19.06.2017.
 */
import { Dispatch } from "redux";
import { createAction, Action } from "redux-actions";

export const SET_VALUE = "SET_VALUE";
export const SET_LOADING = "SET_LOADING";

export type counterAction = ISetValue | ISetLoading;

export interface IValue {
    value: number;
    id: number;
}
export interface ILoading {
    loading: boolean;
    id: number;
}

export type ISetValue = Action<IValue>;
export type ISetLoading = Action<ILoading>;

export const setValue = createAction<IValue>(SET_VALUE);
export const setLoading = createAction<ILoading>(SET_LOADING);

export const setValueAsync = (value: number, id: number) => {
    return (dispatch: Dispatch<counterAction>) => {
        dispatch(setLoading({ loading: true, id }));
        setTimeout(() => {
            dispatch(setValue({ value, id }));
            dispatch(setLoading({ loading: false, id }));
        }, 1000);
    };
};

