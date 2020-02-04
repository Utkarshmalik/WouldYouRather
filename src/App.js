import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components/Login';
import HomePage from './Components/Homepage';
import Leaderboard from './Components/LeaderBoard';
import PostQuestion from './Components/PostQuestion';
import Question from './Components/Reusables/Question';




function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={Login} />
        <Route path='/new' component={PostQuestion} />
        <Route path='/leaderboard' component={Leaderboard} />
        <Route path='/question/:id' component={Question} />
      </Router>
    </div >
  );
}

export default App;
