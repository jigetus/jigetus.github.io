import React from "react";
import "./styles/index.css";
import Bg from "./Components/Bg";
import Hello from "./Components/Hello";
import { Switch, Route } from "react-router-dom";

const App = (props) => {
  return (
    <>
      <Bg />
      <Switch>
        <Route path="/" exact>
          <Hello />
        </Route>
        <Route path="/projects">{() => <div>Projects</div>}</Route>
      </Switch>
    </>
  );
};
export default App;
