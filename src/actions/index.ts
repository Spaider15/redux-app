/**
 * Created by ia.busarov on 19.06.2017.
 */
export const SET_TEST = "SET_TEST";

export interface ISetTest {
    type: typeof SET_TEST;
    test: number;
}

export const setTest = (value: number): ISetTest => {
    return {
        type: SET_TEST,
        test: value,
    }
};
