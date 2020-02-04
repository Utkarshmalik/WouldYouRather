import React, { Component } from 'react';
import './Styles/loginStyle.css';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';



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
                  Object.keys(this.props.RegisteredUsers).map((user) =>
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

const mapStateToProps = (state) => {
  return ({
    RegisteredUsers: state.RegisteredUsers
  })
}

export default connect(mapStateToProps)(Login);