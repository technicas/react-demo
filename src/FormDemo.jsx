import React from "react";

export default class FormDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.value);
    }

    onChangeHandler = (e) => {
        this.setState({
            value:e.target.value
        })
    }

    render() {
        return <div>
            <h1>表单</h1>
            <form onSubmit={this.handleSubmit}>
                {/*受控组件*/}
                {/*通常推荐使用受控组件，但受控组件需要为每个组件提供处理函数，表单控件如果比较多的时候比较麻烦，也可以使用非受控组件*/}
                <input type="text" value={this.state.value} onChange={this.onChangeHandler}/>
                <button onClick={this.handleSubmit}>提交</button>
            </form>
        </div>
    }
}