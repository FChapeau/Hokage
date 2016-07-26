/**
 * Created by chapeau on 7/25/16.
 */
///<reference path="../typings/index.d.ts"/>

import {Demo} from "./components/test";
import * as ReactDOM from "react-dom";
import * as React from "react";

ReactDOM.render(<Demo name="Francois" age="42"></Demo>,
    document.getElementById('content')
);