import './App.css';
// import { useState } from 'react';
// import axios from 'axios';
import React from 'react';
// import ReactDOM from 'react-dom';
import Navbar from './components/Navbar.js';
import CustomerList from './pages/CustomerList.js';
import AddCustomer from './pages/AddCustomer.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
    return (
      <Router>
        <div>
          <Navbar>
          </Navbar>
          <Switch>
            <Route path="/list">
              <CustomerList />
            </Route>
            <Route path="/addcustomer">
              <AddCustomer />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  

export default App;

