/**
 * Created by ia.busarov on 23.06.2017.
 */
import { setCounter, setCounterLoading, setCounterAsync } from "../actions";
import { Counter } from "./index";
import { ICounter } from "../types";

const state: ICounter[] = [
    {
        value: 0,
        loading: false,
    },
];
const dispatch = jest.fn();

jest.useFakeTimers();

it("dispatch setCounter action, expect value to be 5", () => {
    expect(Counter(state, setCounter({value: 5, id: 0})))
        .toEqual([{ value: 5, loading: false }]);
});

it("dispatch setLoading action, expect loading to be true" , () => {
    expect(Counter(state, setCounterLoading({loading: true, id: 0})))
        .toEqual([{ value: 5, loading: true }]);
});

it("dispatch setCounterAsync action, expect call dispatch 3 times, and value to be 10", () => {
    const value = 10;
    const id = 0;
    const action = setCounterAsync(value, id);
    action(dispatch);
    expect( dispatch.mock.calls.length ).toBe( 1 );
    expect( dispatch.mock.calls[0][0] ).toEqual( setCounterLoading({loading: true, id}) );
    jest.runTimersToTime(1000);
    expect( dispatch.mock.calls.length ).toBe( 3 );
    expect( dispatch.mock.calls[1][0] ).toEqual( setCounter({value, id}) );
    expect( dispatch.mock.calls[2][0] ).toEqual( setCounterLoading({loading: false, id}) );
});
