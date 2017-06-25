/**
 * Created by ia.busarov on 19.06.2017.
 */
import {
    SET_VALUE, SET_LOADING,
    ISetValue, ISetLoading,
} from "../actions";
import { IStore, ICounter } from "../types";
import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import initialState from "../initalState";

interface IPayload {
    id: number;
    value?: number;
    loading?: boolean;
}
export const Counter = handleActions<ICounter[], IPayload>({
    [SET_VALUE]: (state: ICounter[], action: ISetValue) => {
        const counters = state.slice();
        const payload = action.payload;
        if (payload) {
            counters[payload.id] = { ...counters[payload.id], value: payload.value } ;
        }
        return counters;
    },
    [SET_LOADING]: (state: ICounter[], action: ISetLoading) => {
        const counters = state.slice();
        const payload = action.payload;
        if (payload) {
            counters[payload.id] = { ...counters[payload.id], loading: payload.loading } ;
        }
        return counters;
    },
}, initialState.counters);

export default combineReducers<IStore>({
    counters: Counter,
});
