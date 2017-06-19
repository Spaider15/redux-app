import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { setTest, ISetTest } from "../actions";
import AppView from "../components/Test";
import { IStore } from "../types";

interface IProps {
    test: number;
}

const mapStateToProps = ({ test }: IStore) => ({ test });

const mapDispatchToProps = (dispatch: Dispatch<ISetTest> ) => {
    return {
        setCounter: (value: number) => dispatch(setTest(value)),
    };
};

export default connect<IProps, any, {}>(
    mapStateToProps,
    mapDispatchToProps,
)(AppView);
