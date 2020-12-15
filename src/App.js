import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

//Import pages.
import EmployeeTable from "./pages/EmployeeTable";

function App() {
  return (
    <Router>
      <Route exact path="/" component={EmployeeTable} />
    </Router>
  );
}

export default App;
