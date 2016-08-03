
///<reference path="../../typings/index.d.ts"/>

import * as React from "react";
import {Card, CardTitle, CardText, CardHeader} from "material-ui/Card";
import {RaisedButton} from "material-ui"

const styles = {
    width: "500px"
}

export interface SummaryCardProps {
    title: string;
}

export class SummaryCard extends React.Component<SummaryCardProps, any> {
    render () {
        return(
            <Card style={styles}>
                <CardHeader
                    title={this.props.title}
                    avatar="http://lorempixel.com/100/100/nature/"
                />
                <CardText>
                    This is a test card.
                    <RaisedButton label="This is a test"/>
                </CardText>
            </Card>
        );
    }
}