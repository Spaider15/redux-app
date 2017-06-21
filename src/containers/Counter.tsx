import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { setCounter, ISetCounter, setCounterAsync, counterAction } from "../actions";
import AppView from "../components/CounterView";
import { IStore } from "../types";

interface IProps {
    value: number;
    loading: boolean;
}

const mapStateToProps = ({ counter }: IStore) => ({ ...counter });

const mapDispatchToProps = (dispatch: Dispatch<ISetCounter> ) => {
    return {
        setCounter: (value: number) => dispatch(setCounterAsync(value)),
    };
};

export default connect<IProps, any, {}>(
    mapStateToProps,
    mapDispatchToProps,
)(AppView);
