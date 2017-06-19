import * as React from "react";
import { ISetSecondCounter } from "../actions";

interface IProps {
    secondCounter: number;
    setCounter: (value: number) => ISetSecondCounter;
}

interface IState {
    value: number;
}

export default class SecondCounterView extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: props.secondCounter,
        };
    }

    public render() {
        return (
            <div>
                <div>Второй Счетчик: {this.props.secondCounter}</div>
                <input defaultValue={this.state.value + ""}
                       onChange={ (e) => {this.setState({ value: +e.currentTarget.value }); } }></input>
                <button onClick={ () => { this.props.setCounter(this.state.value); }}>Установить счетчик</button>
            </div>
        );
    }
};