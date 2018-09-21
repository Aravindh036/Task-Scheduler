import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
// import Login from './Login/Student/Login';
import Login from './Login/Staff/Login';
import Signup from './Signup/Student/Signup';
import AddTask from './Home/AddTask/AddTask';
class App extends Component {
  render() {
    return (
      <div>
        <AddTask/>
      </div>
    );
  }
}

export default App;
