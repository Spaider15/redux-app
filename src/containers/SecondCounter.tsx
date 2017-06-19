import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { setSecondCounter, ISetSecondCounter } from "../actions";
import AppView from "../components/SecondCounterView";
import { IStore } from "../types";

interface IProps {
    secondCounter: number;
}

const mapStateToProps = ({ secondCounter }: IStore) => ({ secondCounter });

const mapDispatchToProps = (dispatch: Dispatch<ISetSecondCounter> ) => {
    return {
        setCounter: (value: number) => dispatch(setSecondCounter(value)),
    };
};

export default connect<IProps, any, {}>(
    mapStateToProps,
    mapDispatchToProps,
)(AppView);
