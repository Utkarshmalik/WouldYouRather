import React, { Component } from 'react';
import { connect } from 'react-redux';


class HomePage extends Component {

  render() {
    console.log(this.props.currentUser)
    return (
      <div>
        <h1>Homepage</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return (
    {
      currentUser: state.CurrentlyLoggedInUser
    })
}

export default connect(mapStateToProps)(HomePage);