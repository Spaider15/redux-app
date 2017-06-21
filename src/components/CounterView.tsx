import * as React from "react";
import { counterAction } from "../actions";

interface IProps {
    value: number;
    loading: boolean;
    setCounter: (value: number) => Promise<any>;
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
        if ( this.props.loading ) {
            return(
                <div>
                    Loading...
                </div>
            );
        } else {
            return (
                <div>
                    <div>Счетчик: {this.props.value}</div>
                    <input defaultValue={this.state.value + ""}
                           onChange={ (e) => {this.setState({ value: +e.currentTarget.value }); } }></input>
                    <button onClick={ () => { this.props.setCounter(this.state.value); }}>Установить счетчик</button>
                </div>
            );
        }
    }
}
