import React from "react";
import { Switch, Route } from "react-router-dom";
import Card from "../card/Card";
import TakeNote from "../inputForm/TakeNote";
import "./mainArea.css";
export default function MainArea() {
  // Array.from(Array(10).keys());
  let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  let cards = (
    <div className="cards-container">
      {arr.map((ind) => {
        return <Card />;
      })}
    </div>
  );

  return (
    <div>
      <Switch>
        <Route path="/reminders">
          {" "}
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
        <Route path="/" className="home-page">
          <div>
            <TakeNote />
          </div>
          <div> {cards}</div>
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
        </Route>
      </Switch>
    </div>
  );
}
