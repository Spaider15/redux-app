import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { setSecondCounterAsync, ISetCounter } from "../actions";
import AppView from "../components/SecondCounterView";
import { IStore } from "../types";

interface IProps {
    value: number;
    loading: boolean;
}

const mapStateToProps = ({ secondCounter }: IStore) => ({ ...secondCounter });

const mapDispatchToProps = (dispatch: Dispatch<ISetCounter> ) => {
    return {
        setCounter: (value: number) => dispatch(setSecondCounterAsync(value)),
    };
};

export default connect<IProps, any, {}>(
    mapStateToProps,
    mapDispatchToProps,
)(AppView);
