import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { setCounter, ISetCounter } from "../actions";
import AppView from "../components/CounterView";
import { IStore } from "../types";

interface IProps {
    counter: number;
}

const mapStateToProps = ({ counter }: IStore) => ({ counter });

const mapDispatchToProps = (dispatch: Dispatch<ISetCounter> ) => {
    return {
        setCounter: (value: number) => dispatch(setCounter(value)),
    };
};

export default connect<IProps, any, {}>(
    mapStateToProps,
    mapDispatchToProps,
)(AppView);
