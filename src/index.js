import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import store from "./store";

import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Timeline from "./pages/Timeline";

import * as serviceWorker from "./utils/serviceWorker";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faStackOverflow,
  faGithub,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faEnvelope,
  faFileAlt,
  faLinkedinIn,
  faStackOverflow,
  faGithub,
  faGitlab,
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route
          path="/home"
          render={() => (
            <Header>
              <Home />
            </Header>
          )}
        />
        <Route
          path="/experience"
          render={() => (
            <Header>
              <Experience />
            </Header>
          )}
        />
        <Route
          path="/timeline"
          render={() => (
            <Header>
              <Timeline />
            </Header>
          )}
        />
      </Switch>
      <Footer />
    </Router>
  </Provider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
