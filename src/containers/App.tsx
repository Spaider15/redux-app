import * as React from "react";
import Counter from "./Counter";
import SecondCounter from "./SecondCounter";

export default class App extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <Counter />
                <br />
                <SecondCounter />
            </div>
        );
    }
};