import React from "react";
import "./App.css";
import { Header } from "./component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FilmPage, HomePage, PeoplePage, SpeciesPage, StarShipPage, VehiclesPage } from "./page";
function App() {
  return (
    <div className="app">
      <Router>
      <Header />
        <Switch>
        <Route path="/vehilces" >
            <VehiclesPage/>
          </Route>
          <Route path="/starships" >
            <StarShipPage/>
          </Route>
        <Route path="/species">
            <SpeciesPage/>
          </Route>
          <Route path="/films">
            <FilmPage />
          </Route>
          <Route path="/people">
            <PeoplePage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
