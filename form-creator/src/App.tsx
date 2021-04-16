import React from "react";

import { NewMeetForm, NewEventForm } from "./Forms";

import "./App.less";

const App = () => (
  <div className="App">
    <NewEventForm />
    <hr />
    <NewMeetForm />
  </div>
);

export default App;
