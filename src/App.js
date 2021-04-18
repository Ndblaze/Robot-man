import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Home from './pages';
import SigninPage from './pages/signin'

function App() {
  return (
    <Router>
      <Switch>
         <Route path="/" component={Home} exact />
         <Route path="/signin" component={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
