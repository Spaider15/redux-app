import * as React from "react";
import { ISetCounter } from "../actions";

interface IProps {
    value: number;
    loading: boolean;
    setCounter: (value: number) => ISetCounter;
}

interface IState {
    value: number;
}

export default class SecondCounterView extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: props.value,
        };
    }

    public render() {
        if (this.props.loading) {
            return (
                <div>
                    Loading...
                </div>
            );
        } else {
            return (
                <div>
                    <div>Второй Счетчик: {this.props.value}</div>
                    <input defaultValue={this.state.value + ""}
                           onChange={ (e) => {
                               this.setState({value: +e.currentTarget.value});
                           } }></input>
                    <button onClick={ () => {
                        this.props.setCounter(this.state.value);
                    }}>Установить счетчик
                    </button>
                </div>
            );
        }
    }
}
