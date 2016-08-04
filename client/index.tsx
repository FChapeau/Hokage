/**
 * Created by chapeau on 7/25/16.
 */
///<reference path="../typings/index.d.ts"/>

import {SummaryCard} from "./components/summaryCard";
import {Dashboard} from "./components/routeComponents/dashboard";
import {render} from "react-dom";
import * as React from "react";
import {Router, Route, IndexLink, Link, hashHistory, IndexRoute} from "react-router";
import {MuiThemeProvider, getMuiTheme, lightBaseTheme} from "material-ui/styles";

interface AppState {
    status: number;
}

class App extends React.Component <any, AppState> {

    constructor (props: any) {
        super(props);
        this.state = {status: 0};
        this.handleChange = this.handleChange.bind(this);
    }

    public handleChange(event) {
        this.setState( {status: parseInt(event.target.value)});
    }

    public render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                    <SideNav/>
                    {this.props.children}
                    <input
                        type="number"
                        value={this.state.status}
                        onChange={this.handleChange}
                        />
                    <SummaryCard title="Hello" status={this.state.status}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

class SideNav extends React.Component<any, any> {
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

render(
    <div>
        <h1>Test</h1>

        <Router history={hashHistory}>
            <Route path="/" component={App} >
                <IndexRoute component={Dashboard}/>
            </Route>
        </Router>
    </div>,
    document.getElementById("content")
);