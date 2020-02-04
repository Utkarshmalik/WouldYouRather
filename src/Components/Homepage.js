import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentLoggedInUser } from '../Types';
import { Button } from '@material-ui/core';
import { AuthLogout } from '../Actions/shared';


class HomePage extends Component {

  OnLogOut() {

    this.props.dispatch(AuthLogout());
  }

  render() {
    console.log(this.props.currentUser)
    return (
      <div>
        <Button onClick={this.OnLogOut.bind(this)} variant="outlined" style={{ color: "#F0B05D" }}>Logout </Button>

        <h1>Homepage</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return (
    {
      currentUser: state.currentLoggedInUser
    })
}

export default connect(mapStateToProps)(HomePage);