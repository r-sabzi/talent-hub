import React from "react";
import "./App.css";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

const App = () => (
  <Router>
    <>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <section className="container">
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </section>
    </>
  </Router>
);

export default App;
