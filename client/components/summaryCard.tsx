
///<reference path="../../typings/index.d.ts"/>

import * as React from "react";
import {Card, CardTitle, CardText, CardHeader} from "material-ui/Card";
import {RaisedButton, Avatar} from "material-ui";
import {red900, green500, amber500, deepPurple500 as Purple, white} from "material-ui/styles/colors";
import {Chip} from "material-ui";

const styles = {
    card: {
        width: "400px"
    },
    wrapper: {
        display: "flex",
        flexWrap: "wrap",
        padding: "0.5em 0 0.5em 0"
    },
    chip: {
        margin: "0.2em"
    }
};

export interface InformationDisplayProps {
    label: string;
    data: string;
}

export class InformationDisplay extends React.Component<InformationDisplayProps, any> {
    render() {
        return(
            <p>
                <span style={{fontWeight: "bold", paddingRight: "1rem", width: "6rem"}}>{this.props.label + ":"}</span>
                <span>{this.props.data}</span>
            </p>
        );
    }
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
            <Card style={styles.card}>
                <CardHeader
                    title={this.props.title}
                    titleColor={white}
                    titleStyle={{fontSize: "2em"}}
                    style={{backgroundColor: StatusColor }}>
                    <div style={styles.wrapper}>
                        <Chip style={styles.chip}>Test</Chip>
                        <Chip style={styles.chip}>Plex</Chip>
                        <Chip style={styles.chip}>Docker</Chip>
                        <Chip style={styles.chip}>Minecraft</Chip>
                    </div>
                </CardHeader>
                <CardText>
                    <InformationDisplay label={"IP"} data={"192.168.0.18"}/>
                    <InformationDisplay label={"Domain"} data={"ad.yu-shan.net"}/>
                </CardText>
            </Card>
        );
    }
}