import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "../src/styles/reset.css"
import  "./App.scss"

import Intro from "../src/pages/intro/intro"
import Fiche  from "../src/pages/fiche/fiche"


const App = () => {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/">
          <Intro />
        </Route>
        <Route exact path="/fiche">
          <Fiche />
        </Route>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
