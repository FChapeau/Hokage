/**
 * Created by chapeau on 7/25/16.
 */
///<reference path="../typings/index.d.ts"/>

import {SummaryCard} from "./components/summaryCard";
import {render} from "react-dom";
import * as React from "react";
import {Router, Route, IndexLink, Link, hashHistory, IndexRoute} from "react-router";
import {MuiThemeProvider, getMuiTheme, lightBaseTheme} from "material-ui/styles";

class App extends React.Component <any, any> {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                    <Nav/>
                    {this.props.children}
                    <SummaryCard title="Test"/>
                </div>
            </MuiThemeProvider>
        );
    }
}

class Nav extends React.Component<any, any> {
    render() {
        return(
            <div>
                <ul role="nav">
                    <li>
                        <IndexLink to="/">Home</IndexLink>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/mission">Mission</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

class About extends React.Component<any, any> {
    render() {
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

class Mission extends React.Component<any, any>{
    render() {
        return (
            <div>
                <h1>Mission</h1>
            </div>
        );
    }
}

class Home extends React.Component<any, any> {
    render() {
        return (
          <div>
              <h1>Home</h1>
          </div>
        );
    }
}

render(
    <div>
        <h1>Test</h1>

        <Router history={hashHistory}>
            <Route path="/" component={App} >
                <IndexRoute component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact} />
                <Route path="/mission" component={Mission}/>
            </Route>

        </Router>
    </div>,
    document.getElementById("content")
);