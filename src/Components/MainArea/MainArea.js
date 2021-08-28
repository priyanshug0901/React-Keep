import React from "react";
import { Switch, Route } from "react-router-dom";
import Content from "../Content/Content";
import "./mainArea.css";

export default function MainArea() {
  return (
    <div>
      <Switch>
        <Route path="/reminders">
          <h1>reminders</h1>
        </Route>
        <Route path="/drafts">
          <hr />
          <h1>Drafts</h1>
        </Route>

        <Route path="/snoozed">
          <h1>Sooozed</h1>
        </Route>

        <Route path="/sent">
          <h1>sent</h1>
        </Route>
        <Route path="/">
          <Content />
        </Route>
      </Switch>
    </div>
  );
}
