import React from "react";
import Child1 from "./child1";
import Child2 from "./child2";

export default class Parent extends React.Component {
    render() {
        return (
            <div>
                <p>Parent</p>
                Child1:<Child1 />
                Child2:<Child2 />
            </div>
        );
    }
}