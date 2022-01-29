import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './App';
import * as serviceWorker from './serviceWorker';
import { Provider as ContextProvider } from './PolluStat/Context';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";

export default function App() {
    return (
      <ContextProvider>
      <Router>
        <Page />
      </Router>
      </ContextProvider>
    );
}


ReactDOM.render(App(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
