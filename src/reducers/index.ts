/**
 * Created by ia.busarov on 19.06.2017.
 */
import {
    SET_COUNTER, COUNTER_LOADING,
    ISetCounter, ISetLoading,
} from "../actions";
import { IStore, ICounter } from "../types";
import { combineReducers } from "redux";
import { handleActions } from "redux-actions";

const counters: ICounter[] = [];
for (let i = 0; i <= 100; i++) {
    counters.push({value : 0, loading: false});
}
const initialState: IStore = {
    counters,
};

interface IPayload {
    id: number;
    value?: number;
    loading?: boolean;
}

export const Counter = handleActions<ICounter[], IPayload>({
    [SET_COUNTER]: (state: ICounter[], action: ISetCounter) => {
        const counters = state.slice();
        const payload = action.payload;
        if (payload) {
            counters[payload.id].value = payload.value;
        }
        return counters;
    },
    [COUNTER_LOADING]: (state: ICounter[], action: ISetLoading) => {
        const counters = state.slice();
        const payload = action.payload;
        if (payload) {
            counters[payload.id].loading = payload.loading;
        }
        return counters;
    },
}, initialState.counters);

export default combineReducers<IStore>({
    counters: Counter,
});
