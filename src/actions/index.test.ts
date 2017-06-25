/**
 * Created by ia.busarov on 25.06.2017.
 */
import {setValue, setValueAsync, SET_VALUE, SET_LOADING, setLoading} from "./index";
const dispatch = jest.fn();
jest.useFakeTimers();

it(`action creator with type ${SET_VALUE} should return properly action`, () => {
    const data = { value: 5, id: 0 };
    const action = {
        type: SET_VALUE,
        payload: data,
    };
    expect(setValue(data)).toEqual(action);
});

it(`action creator with type ${SET_LOADING} should return properly action`, () => {
    const data = { loading: true, id: 0 };
    const action = {
        type: SET_LOADING,
        payload: data,
    };
    expect(setLoading(data)).toEqual(action);
});

it(`action creator setValueAsync should call dispatch 3 times with properly values`, () => {
    const value = 10;
    const id = 0;
    const action = setValueAsync(value, id);
    action(dispatch);
    expect( dispatch.mock.calls.length ).toBe( 1 );
    expect( dispatch.mock.calls[0][0] ).toEqual( setLoading({loading: true, id}) );
    jest.runTimersToTime(1000);
    expect( dispatch.mock.calls.length ).toBe( 3 );
    expect( dispatch.mock.calls[1][0] ).toEqual( setValue({value, id}) );
    expect( dispatch.mock.calls[2][0] ).toEqual( setLoading({loading: false, id}) );
});
