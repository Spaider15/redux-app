import * as React from "react";
import { ISetCounter } from "../actions";

interface IProps {
    counter: number;
    setCounter: (value: number) => ISetCounter;
}

interface IState {
    counter: number;
}

export default class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            counter: this.props.counter,
        };
    }

    public render() {
        return (
            <div>
                <div>Счетчик: {this.props.counter}</div>
                <input defaultValue={this.state.counter + ""}
                       onChange={ (e) => {this.setState({ counter: +e.currentTarget.value }); } }></input>
                <button onClick={ () => { this.props.setCounter(this.state.counter); }}>Установить счетчик</button>
            </div>
        );
    }
}
