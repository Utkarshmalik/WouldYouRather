import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentLoggedInUser } from '../Types';
import { Button } from '@material-ui/core';
import homepageStyle from './Styles/homepageStyle.css';


class HomePage extends Component {

  render() {
    console.log(this.props)
    return (
      <div style={{ color: "black" }} >

        <p>Select a maintenance drone:</p>

        <div>
          <input type="radio" id="huey" name="drone" value="huey"
            checked />
          <label for="huey">Huey</label>
        </div>

        <div>
          <input type="radio" id="dewey" name="drone" value="dewey" />
          <label for="dewey">Dewey</label>
        </div>

        <div>
          <input type="radio" id="louie" name="drone" value="louie" />
          <label for="louie">Louie</label>
        </div>

      </div>

    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return (
    {
      currentUser: state.currentLoggedInUser,
      answeredQuestions: state.currentLoggedInUser.answers,
      questions: state.questions
    })
}

export default connect(mapStateToProps)(HomePage);