import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from './Components/contacts/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact';
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

import { provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <provider>
        <div className="App">
          <header branding="contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/about" component={About} />
              <Route component = {NotFound} />
            </Switch>
          </div>
        </div>
      </provider>
    );
  }
}

export default App;
