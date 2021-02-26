import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "./logo.png";
import CalViewComponent from "./components/cal-view";
import { Route, Switch } from "react-router-dom";
import GraphComponent from "./components/graph-view";

function App() {
  return (
    <div className="App">
      <header>
        <div style={{ flex: "1" }}>
          <Link to="/" className="removeAnchorStyles">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Gecko Portal</h1>
          </Link>
        </div>
        <div className="flex-container">
          <div style={Object.assign({}, { flex: "1" }, {})}>
            <NavLink to="/" exact style={{ marginRight: "10px" }}>
              <button>Calendar</button>
            </NavLink>
            <NavLink to="/graph">
              <button>Graph</button>
            </NavLink>
          </div>
        </div>
      </header>
      <Switch>
        <Route path="/" exact component={CalViewComponent}></Route>
        <Route path="/graph" component={GraphComponent}></Route>
      </Switch>
    </div>
  );
}

export default App;
