import React, { Component } from 'react';
import './Styles/loginStyle.css';
import { Button } from '@material-ui/core';

let users = {
  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL: 'https://www.pngarts.com/files/3/Avatar-PNG-Pic.png',
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    avatarURL: 'https://www.pngarts.com/files/3/Avatar-PNG-Pic.png',
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  johndoe: {
    id: 'johndoe',
    name: 'John Doe',
    avatarURL: 'https://www.pngarts.com/files/3/Avatar-PNG-Pic.png',
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}


class Login extends Component {

  state = {
    selected: "none"
  }

  handleChange(event) {

    const value = event.target.value;
    console.log(value);
    this.setState({ selected: value })

  }
  
  onSignIn() {

    if (this.state.selected !== "none") {
      //dispatch an action to make the user logged in and link to the homepage
      this.props.history.push('./');
    }
  }

  render() {
    return (
      <div>
        <div className="background"></div>
        <div className="background2"></div>


        <div className="loginForm">
          <hgroup>
            <h1>Would You Rather</h1>
          </hgroup>
          <div>

            <div style={{ color: "#F0B05D", margin: "15px" }} >
              Select the user:
          </div>

            <div>
              <select onChange={this.handleChange.bind(this)} value={this.state.selected} >
                <option value="move" disabled>SELECT USER...</option>

                {
                  Object.keys(users).map((user) =>
                    <option key={user} value={user}>{user}</option>
                  )}
                <option value="none">None</option>
              </select>
            </div>


            <div style={{ color: "black", margin: "15px" }} >
              <Button onClick={this.onSignIn.bind(this)} variant="outlined" style={{ color: "#F0B05D" }}>Sign In </Button>
            </div>

          </div>


          <div className="powered">
            Powered by <a href="http://www.kvcodes.com"> Kvcodes </a>
          </div>
        </div>
      </div>
    )
  }
}


export default Login;