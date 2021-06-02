import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { NewMeetForm, NewEventForm } from "./Forms";
import { Wireframe, EventCalling } from "./pages";

import "./App.less";

const eventDummyData = ["100 Meter Dash", "200 Meter Dash", "400 Meter Dash"];

const App = () => (
  <div className="App">
    <Router>
      <Wireframe>
        <Switch>
          <Route exact path="/track">
            <NewEventForm />
            <hr />
            <NewMeetForm />
          </Route>
          <Route exact path="/">
            HOME page
          </Route>
          <Route exact path="/eventCalling">
            <EventCalling eventList={eventDummyData} />
          </Route>
        </Switch>
      </Wireframe>
    </Router>
  </div>
);

export default App;
