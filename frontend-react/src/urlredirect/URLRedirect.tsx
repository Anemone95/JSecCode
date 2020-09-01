import React from 'react';
import '../App.css';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import SimpleURLRedirect from "./SimpleURLRedirect";
import * as QueryString from "query-string"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import DelayedURLRedirect from "./DelayedURLRedirect";

function URLRedirect(props: RouteComponentProps) {
    return (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/simpleUrlRedirect?url=https://www.baidu.com/">SimpleURLRedirect</Link>
                </li>
                <li>
                    <Link to="/delayedUrlRedirect?url=https://www.baidu.com/">DelayedRedirect</Link>
                </li>
            </ul>

            <Switch>
                <Route path="/simpleUrlRedirect">
                    <SimpleURLRedirect/>
                </Route>
                <Route path="/delayedUrlRedirect">
                    <DelayedURLRedirect/>
                </Route>
            </Switch>
        </div>
    </Router>
    )
}
export default withRouter(URLRedirect);
