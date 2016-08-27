
///<reference path="../typings/index.d.ts"/>

import * as React from "react";
import {SideDrawer} from "./components/sideDrawer";
import {MuiThemeProvider} from "material-ui/styles";
import {AppBar, IconButton} from "material-ui";
import {NavigationClose} from "material-ui/svg-icons";

export interface LayoutProps {

}

export interface LayoutState {
    drawerOpen: boolean;
}

export class Layout extends React.Component <LayoutProps, LayoutState> {
    constructor (props: LayoutProps) {
        super(props);

        this.state = {
            drawerOpen: false
        };

        this.toggleSideDrawer = this.toggleSideDrawer.bind(this);
    }

    toggleSideDrawer(event: Object) {
        this.setState({drawerOpen: !this.state.drawerOpen});
    }

    render() {
        return(
            <MuiThemeProvider>
                <div>
                    <div>
                        <AppBar title="Hokage" iconElementLeft={
                            <IconButton onClick={this.toggleSideDrawer}><NavigationClose/></IconButton>
                        } />
                    </div>
                    <div>
                        <SideDrawer open={this.state.drawerOpen} openToggleCallback={this.toggleSideDrawer}/>
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}