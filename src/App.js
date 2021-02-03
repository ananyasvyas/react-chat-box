import logo from './logo.svg';
import './App.css';
import Header from './Components/Common/Header/Header';
import Footer from './Components/Common/Footer/Footer';
import Dashboard from './Components/Common/Dashboard/Dashboard';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Register from './Components/Features/Register/Register';
import Login from './Components/Features/Login/Login';
import HomePage from './Components/Features/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
      {/* <Dashboard />
      <Footer /> */}
    </div>
  );
}

export default App;
