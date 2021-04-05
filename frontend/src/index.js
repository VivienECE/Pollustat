import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './App';
import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export default function App() {
    return (
      <Router>  
          <Switch>
            <Route path="/">
              <Page />
            </Route>
          </Switch>
      </Router>
    );
}


ReactDOM.render(App(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
