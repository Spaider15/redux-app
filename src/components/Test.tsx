import * as React from "react";
import { ISetTest } from "../actions";

interface IProps {
    test: number;
    setCounter: (value: number) => ISetTest;
}

interface IState {
    counter: number;
}

export default class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            counter: this.props.test,
        };
    }

    public render() {
        return (
            <div>
                <div>Счетчик: {this.props.test}</div>
                <input defaultValue={this.state.counter + ""}
                       onChange={ (e) => {this.setState({ counter: +e.currentTarget.value }); } }></input>
                <button onClick={ () => { this.props.setCounter(this.state.counter); }}>Установить счетчик</button>
            </div>
        );
    }
}
