/**
 * Created by ia.busarov on 23.06.2017.
 */
import { createAction } from "redux-actions";
import { Counter } from "./index";
import { ICounter } from "../types";

const state: ICounter[] = [
    {
        value: 0,
        loading: false,
    },
];
const SET_VALUE = "SET_VALUE";
const SET_LOADING = "SET_LOADING";
export interface ISetValue {
    value: number;
    id: number;
}
export interface ISetLoading {
    loading: boolean;
    id: number;
}

const setValue = createAction<ISetValue>(SET_VALUE);
const setLoading = createAction<ISetLoading>(SET_LOADING);

it(`call reducer with ${SET_VALUE} action, expect new state with value 5`, () => {
    expect(Counter(state, setValue({value: 5, id: 0})))
        .toEqual([{ value: 5, loading: false }]);
});

it(`call reducer with ${SET_LOADING} action, expect new state with loading is true` , () => {
    expect(Counter(state, setLoading({loading: true, id: 0})))
        .toEqual([{ value: 0, loading: true }]);
});

it("without payload should return initialState", () => {
    expect(Counter(state, {type: SET_VALUE}))
        .toEqual([{ value: 0, loading: false }]);
    expect(Counter(state, {type: SET_LOADING}))
        .toEqual([{ value: 0, loading: false }]);
});

it("Initial state should not be changed", () => {
    expect(state).toEqual([{value: 0, loading: false}]);
});
