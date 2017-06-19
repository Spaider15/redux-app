import * as React from "react";
import Test from "./Test";

export default class App extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <Test />
        );
    }
};