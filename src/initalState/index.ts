/**
 * Created by ia.busarov on 25.06.2017.
 */
import { ICounter, IStore } from "../types";

const initialCounters: ICounter[] = [];
for (let i = 0; i <= 100; i++) {
    initialCounters.push({value : 0, loading: false});
}

const initialState: IStore = {
    counters: initialCounters,
};

export default initialState;
