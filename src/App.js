import React from "react";
import { Route, Switch } from "react-router-dom";
import { DefaultCard, Map, DetailCard } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={DefaultCard} />
        <Route path="/:id" component={DetailCard} />
      </Switch>
      <Map />
    </div>
  );
}

export default App;
