///<reference path="../../typings/index.d.ts"/>
import * as React from "react";
import {Drawer, MenuItem} from "material-ui";
import {AppBar} from "material-ui";
import {IconButton} from "material-ui";
import {NavigationClose} from "material-ui/svg-icons";

export interface DrawerProps {
    open: boolean;
}

export interface DrawerState {
    open: boolean;
}

export class SideDrawer extends React.Component<DrawerProps, DrawerState> {
    constructor (props: DrawerProps) {
        super (props);
        this.state = {open: false};
    }

    render() {
        return(
            <Drawer open={this.props.open} docked={false} onRequestChange={function(openState, reason)
            {
                this.setState({open: openState});
            }}>
                <AppBar iconElementLeft={
                    <IconButton onClick={() => this.setState({open: !this.state.open } ) } ><NavigationClose/></IconButton>
                } />
                <MenuItem>Hello</MenuItem>
                <MenuItem>World!</MenuItem>
            </Drawer>
        );
    }
}