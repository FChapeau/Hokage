/**
 * Created by chapeau on 7/25/16.
 */
///<reference path="../typings/index.d.ts"/>

import {Demo} from "./components/test";
import {render} from "react-dom";
import * as React from "react";
import {Router, Route, Link, hashHistory} from "react-router";

class App extends React.Component <any, any> {
    render() {
        return (
            <div>
                <Nav/>
                {this.props.children}
            </div>
        );
    }
}

class Nav extends React.Component<any, any> {
    render() {
        return(
            <div>
                <ul role="nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

class About extends React.Component<any, any> {
    render() {
        console.log("Hello world!");
        return (
        <div>
            <h1>About</h1>
        </div>);
    }
}

class Contact extends React.Component<any, any> {
    render() {
        return (
        <div>
            <h1>Contact</h1>
        </div>);
    }
}

render(
    <div>
        <h1>Test</h1>

        <Router history={hashHistory}>
            <Route path="/" component={App} >
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact} />
            </Route>

        </Router>
    </div>,
    document.getElementById("content")
);