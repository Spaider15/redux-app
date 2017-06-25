import { connect, Dispatch } from "react-redux";
import { setValueAsync, ISetValue } from "../actions";
import AppView from "../components/CounterView";
import { IStore } from "../types";

const mapStateToProps = ({ counters }: IStore, props: { id: number }) => ({ ...counters[props.id], id: props.id });

const mapDispatchToProps = (dispatch: Dispatch<ISetValue> ) => {
    return {
        setCounter: (value: number, id: number) => dispatch(setValueAsync(value, id)),
    };
};

export default connect<any, any, { id: number }>(
    mapStateToProps,
    mapDispatchToProps,
)(AppView);
