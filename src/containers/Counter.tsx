import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { setCounterAsync, ISetCounter } from "../actions";
import AppView from "../components/CounterView";
import { IStore, ICounter } from "../types";

interface IProps {
    counters: ICounter[];
    id: number;
}

const mapStateToProps = ({ counters }: IStore, props: { id: number }) => ({ ...counters[props.id], id: props.id });

const mapDispatchToProps = (dispatch: Dispatch<ISetCounter> ) => {
    return {
        setCounter: (value: number, id: number) => dispatch(setCounterAsync(value, id)),
    };
};

export default connect<any, any, { id: number }>(
    mapStateToProps,
    mapDispatchToProps,
)(AppView);
