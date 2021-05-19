import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { NewMeetForm, NewEventForm } from "./Forms";
import Home from "./pages";

import "./App.less";

const App = () => (
  <div className="App">
    <Router>
      <Home>
        <Switch>
          <Route path="/track">
            <NewEventForm />
            <hr />
            <NewMeetForm />
          </Route>
          <Route path="/"></Route>
        </Switch>
      </Home>
    </Router>
  </div>
);

export default App;
