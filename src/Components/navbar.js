import React, { Component } from 'react'
import { Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux';
import { AuthLogout } from '../Actions/shared';
import { Link } from 'react-router-dom'



class App extends Component {

  OnLogout() {

    this.props.dispatch(AuthLogout());
  }

  render() {
    return (
      <div style={{ fontSize: "20px", color: "#F8C246", backgroundColor: "#e6016c" }}>

        <Navbar>
          <Navbar.Brand style={{ fontSize: "30px", color: "#F8C246" }}>Would You Rather</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to='/'> <Nav style={{ fontSize: "20px", color: "#F8C246", marginLeft: "20px", marginRight: "20px" }}>Home </Nav> </Link>
            <Link to='/new'> <Nav style={{ fontSize: "20px", color: "#F8C246", marginRight: "20px" }}>New </Nav> </Link>
            <Link to='/leaderboard'> <Nav style={{ fontSize: "20px", color: "#F8C246", marginRight: "20px" }}>Leaderboard </Nav> </Link>
          </Nav>
          <span style={{ marginRight: "20vw" }}>Welcome <Link to='/' style={{ color: "#F8C246", fontSize: "20px", fontWeight: 'bold' }}> {this.props.userId.toUpperCase()} </Link></span>
          <Link to='/'><Nav style={{ fontSize: "20px", color: "#F8C246", marginRight: "20px" }} onClick={this.OnLogout.bind(this)} > Logout</Nav></Link>
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    userId: state.currentLoggedInUser.name
  })
}

export default connect(mapStateToProps)(App);