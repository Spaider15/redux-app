import * as React from "react";
import { ISetValue } from "../actions";

interface IProps {
    value: number;
    loading: boolean;
    id: number;
    setCounter: (value: number, id: number) => ISetValue;
}

interface IState {
    value: number;
}

export default class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            value: this.props.value,
        };
    }

    public render() {
        if (this.props.loading) {
            return (
                <div>
                    <div>Счетчик: Loading...</div>
                    Loading...
                    <br />
                    <br />
                </div>
            );
        } else {
            return (
                <div>
                    <div>Счетчик: {this.props.value}</div>
                    <input defaultValue={this.state.value + ""}
                           onChange={ (e) => {
                               this.setState({value: +e.currentTarget.value});
                           } }></input>
                    <button onClick={ () => {
                        this.props.setCounter(this.state.value, this.props.id);
                    }}>Установить счетчик
                    </button>
                    <br />
                    <br />
                </div>
            );
        }
    }
}
