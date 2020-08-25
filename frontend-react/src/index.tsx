import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReflectedXSS from "./xss/ReflectedXSS";
import URLRedirect from "./urlredirect/URLRedirect";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <div>
              <ul>
                  <li>
                      <Link to="/xss?path=111">XSS</Link>
                  </li>
                  <li>
                      <Link to="/urlredirect?url=https://www.baidu.com/">URL Redirect</Link>
                  </li>
              </ul>

              <Switch>
                  <Route path="/xss">
                      <ReflectedXSS/>
                  </Route>
                  <Route path="/urlredirect">
                      <URLRedirect/>
                  </Route>
              </Switch>
          </div>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
