/**
 * Created by ia.busarov on 19.06.2017.
 */
export const SET_COUNTER = "SET_COUNTER";
export const SET_SECOND_COUNTER = "SET_SECOND_COUNTER";

export interface ISetCounter {
    type: typeof SET_COUNTER;
    counter: number;
}

export interface ISetSecondCounter {
    type: typeof SET_SECOND_COUNTER;
    counter: number;
}

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
