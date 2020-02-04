import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components/Login';
import HomePage from './Components/Homepage';
import Leaderboard from './Components/LeaderBoard';
import PostQuestion from './Components/PostQuestion';



function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' component={} />
        <Route path='/login' component={login} />
        <Route path='/new' component={} />
        <Route path='/leaderboard' component={} />
        <Route path='/Question/:id' component={} />
      </Router>
    </div >
  );
}

export default App;
