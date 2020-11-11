import React from "react";

export default class Child1 extends React.Component {
    constructor() {
        super();
        this.input1 = React.createRef();
    }

    changeHandler(e) {
        this.setState({
            input1:e.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.input1} onChange={this.changeHandler.bind(this)} />
            </div>
        );
    }
}