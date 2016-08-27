///<reference path="../../typings/index.d.ts"/>
import * as React from "react";
import {Drawer, MenuItem} from "material-ui";
import {AppBar} from "material-ui";
import {IconButton} from "material-ui";
import {NavigationClose} from "material-ui/svg-icons";
import {NavigationMenu} from "material-ui/svg-icons";

export interface DrawerProps {
    open: boolean;
    openToggleCallback: (event: Object) => void;
}

export interface DrawerState {
    open: boolean;
}

export class SideDrawer extends React.Component<DrawerProps, DrawerState> {
    constructor (props: DrawerProps) {
        super (props);
        this.state = {open: this.props.open};
    }

    render() {
        return(
            <Drawer open={this.props.open} docked={false} onRequestChange={function(openState, reason)
            {
                this.props.openToggleCallback();
            }.bind(this) }>
                <AppBar iconElementLeft={
                    <IconButton onClick={this.props.openToggleCallback} ><NavigationMenu/></IconButton>
                } />
                <MenuItem>Hello</MenuItem>
                <MenuItem>World!</MenuItem>
            </Drawer>
        );
    }
}