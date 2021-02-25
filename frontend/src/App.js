import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import logo from "./logo.png";
import CalViewComponent from "./components/cal-view";
import { Route, Switch } from "react-router-dom";
import GraphComponent from "./components/graph-view";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Gecko Portal</h1>
      </header>
      <Switch>
        <Route path="/" exact component={CalViewComponent}></Route>
        <Route path="/graph" component={GraphComponent}></Route>
      </Switch>
    </div>
  );
}

export default App;
