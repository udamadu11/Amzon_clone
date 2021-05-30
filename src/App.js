import "./App.css";
import Header from "./component/Header/Header";
import { BrowserRouter as Router, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
    </Router>
  );
}

export default App;
