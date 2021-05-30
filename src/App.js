import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Login from "./component/Login.js/Login";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
