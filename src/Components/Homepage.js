import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentLoggedInUser } from '../Types';
import { Button } from '@material-ui/core';
import homepageStyle from './Styles/homepageStyle.css';


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
      currentUser: state.currentLoggedInUser
    })
}

export default connect(mapStateToProps)(HomePage);