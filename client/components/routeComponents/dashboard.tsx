///<reference path="../../../typings/index.d.ts"/>
import * as React from "react";
import {SummaryCard} from "../summaryCard";

export class Dashboard extends React.Component<any, any> {
    render() {
        return(
            <div>
                <h1>This will be the dashboard</h1>
                <br/>
                <SummaryCard status={0} title={"Hello world!"}/>
            </div>
        );
    }
}