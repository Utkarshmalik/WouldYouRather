import React, { Component } from 'react';
import './Styles/loginStyle.css';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { AuthLogin } from '../Actions/shared';


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
      this.props.dispatch(AuthLogin(this.props.RegisteredUsers[this.state.selected]))
      this.props.history.push('./');
    }
  }

  render() {
    return (
      <div className="login">
        <div className="background"></div>
        <div className="background2"></div>

        <div style={{ padding: "80px" }} >
          <div className="loginForm">
            <hgroup>
              <h1 style={{ fontSize: "40px", margin: "15px" }}>Would You Rather</h1>
            </hgroup>
            <div>

              <div style={{ fontSize: "35px", margin: "30px", color: "#F0B05D", margin: "15px" }} >
                Select the user:
          </div>

              <div style={{ margin: "35px" }}>
                <select style={{ fontSize: "25px", color: "#F0B05D" }} onChange={this.handleChange.bind(this)} value={this.state.selected} >
                  <option value="move" disabled>SELECT USER...</option>

                  {
                    Object.keys(this.props.RegisteredUsers).map((user) =>
                      <option key={user} value={user}>{user}</option>
                    )}
                  <option value="none">None</option>
                </select>
              </div>

              <button style={{ margin: "30px" }} onClick={this.onSignIn.bind(this)} type="button" class="buttonui "> <span> Sign In </span>
                <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
              </button>


            </div>


            <div className="powered">
              Powered by <a href="http://www.kvcodes.com"> Kvcodes </a>
            </div>
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