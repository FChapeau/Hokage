
///<reference path="../../typings/index.d.ts"/>

import * as React from "react";
import {Card, CardTitle, CardText, CardHeader} from "material-ui/Card";
import {RaisedButton, Avatar} from "material-ui";
import {red900, green500, amber500, deepPurple500 as Purple} from "material-ui/styles/colors";

const styles = {
    width: "500px"
}

export interface SummaryCardProps {
    title: string;
    status: number;
}

export class SummaryCard extends React.Component<SummaryCardProps, any> {
    render () {
        let StatusColor;
        switch (this.props.status) {
            case 0:
                StatusColor = green500;
                break;
            case 1:
                StatusColor = amber500;
                break;
            case 2:
                StatusColor = red900;
                break;
            default:
                StatusColor = Purple;
        }

        let statusIcon = <Avatar backgroundColor={StatusColor}/>;

        return(
            <Card style={styles}>
                <CardHeader
                    title={this.props.title}
                    avatar={statusIcon}
                />
                <CardText>
                    This is a test card.
                    <RaisedButton label="This is a test"/>
                </CardText>
            </Card>
        );
    }
}