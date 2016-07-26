///<reference path="../../typings/index.d.ts"/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class DemoProps {
    public name:string;
    public age:number;
}

export class Demo extends React.Component<DemoProps, any> {
    private foo:number;
    constructor(props:DemoProps) {
        super(props);
        this.foo = 42;
    }
    render() {
        console.log("hello world");
        return <div>Hello component!</div>
    }
}