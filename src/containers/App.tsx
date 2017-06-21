import * as React from "react";
import Counter from "./Counter";

export default class App extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        const counters = [];
        for (let i = 0; i <= 100; i++) {
            counters.push(<Counter key={i} id ={i} />);
        }
        return (
            <div>
                {counters}
            </div>
        );
    }
}
