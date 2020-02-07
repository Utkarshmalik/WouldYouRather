import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components/Login';
import HomePage from './Components/Homepage';
import Leaderboard from './Components/LeaderBoard';
import PostQuestion from './Components/PostQuestion';
import ViewQuestion from './Components/Reusables/ViewQuestionComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import navbar from './Components/navbar'
import { connect } from 'react-redux';
import Result from './Components/Result';
import LeaderComponent from './Components/Reusables/LeaderComponent';
import UnAnsweredComponent from './Components/Reusables/UnansweredComponent';
import UnansweredList from './Components/UnansweredList';
import ErrorMessage from './Components/Reusables/ErrorComponent';





class App extends Component {

  render() {
    return (
      <div>

        {


          (this.props.logggedIn) ? (


            <Router>
              <Route path='/' component={navbar} />
              <Route exact path='/' component={HomePage} />
              <Route path='/login' component={Login} />
              <Route path='/new' component={PostQuestion} />
              <Route path='/leaderboard' component={Leaderboard} />
              <Route path='/eeede' component={UnAnsweredComponent} />
              <Route path='/question/:id' component={ViewQuestion} />
            </Router>

          ) :
            (<Router><Route exact path='/' component={Login} />
              <Route path='/login' component={ErrorMessage} />
              <Route path='/new' component={ErrorMessage} />
              <Route path='/leaderboard' component={ErrorMessage} />
              <Route path='/eeede' component={ErrorMessage} />
              <Route path='/question/:id' component={ErrorMessage} />

            </Router>)
        }
      </div >
    );
  }
}

const mapStateToProps = (state) => {
  return (
    {
      logggedIn: (state.currentLoggedInUser !== null)

    }
  )
}

export default connect(mapStateToProps)(App);
