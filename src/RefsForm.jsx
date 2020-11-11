import React from "react";

export default class RefsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.userName = React.createRef();
    }

    clickHandler = ()=> {
        console.log(this.userName.current.value)
    }

    render() {
        return <div>
            RefsForm
            <input type="text" ref={this.userName} />
            <button onClick={this.clickHandler}>提交</button>
        </div>
    }

}