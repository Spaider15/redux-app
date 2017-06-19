/**
 * Created by ia.busarov on 19.06.2017.
 */
import { SET_TEST, ISetTest } from "../actions";
import { IStore } from "../types";

const initialState: IStore = {
    test: 5,
};

export default function test(state = initialState, action: ISetTest) {
    switch (action.type) {
        case SET_TEST:
            return { ...state, test: action.test };
        default:
            return state;
    }
};