import React from "react";

export default class RefsAndDOM extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.HelloDiv = React.createRef();
    }

    componentDidMount() {
        console.log(this.HelloDiv.current.style.color = 'red');
    }

    render() {
        return <div ref={this.HelloDiv}>
            Refs And DOM
        </div>
    }

}