import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'




class Message extends Component {

  render() {

    const { RegisteredUsers } = this.props;
    return (
      <div>

        Login to visit this page
         <Link to='/'>
          <Button> Move To Login </Button>
        </Link>
      </div>
    )
  }
}

export default Message;