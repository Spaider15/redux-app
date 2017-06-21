/**
 * Created by ia.busarov on 19.06.2017.
 */
export interface IStore {
    counter: ICounter;
    secondCounter: ISecondCounter;
}

export interface ICounter {
    value: number;
    loading: false;
}

export interface ISecondCounter {
    value: number;
    loading: false;
}
