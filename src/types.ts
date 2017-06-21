/**
 * Created by ia.busarov on 19.06.2017.
 */
export interface IStore {
    counters: ICounter[];
}

export interface ICounter {
    value: number;
    loading: boolean;
}
