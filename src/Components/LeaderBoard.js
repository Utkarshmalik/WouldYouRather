import React, { Component } from 'react';
import LeaderComponent from './Reusables/LeaderComponent';
import { connect } from 'react-redux';


class Leaderboard extends Component {

  render() {

    const { RegisteredUsers } = this.props;
    return (
      <div>
        {
          RegisteredUsers.map((user) => <LeaderComponent key={user.id} user={user} />)
        }
      </div>
    )
  }


}

const myStateToProps = (state, myProps) => {

  const userids = Object.keys(state.RegisteredUsers);

  const users = []

  userids.forEach((element) => {
    users.push(state.RegisteredUsers[element])
  })

  users.sort(
    (a, b) => {


      const s1 = (Object.keys(a.answers).length) + a.questions.length;
      const s2 = (Object.keys(b.answers).length) + b.questions.length;

      return Number(s2) - Number(s1);
    }
  )

  setTimeout(() => {
    //console.log(users)
  }, 2000)



  return ({
    RegisteredUsers: users
  })
}

export default connect(myStateToProps)(Leaderboard);