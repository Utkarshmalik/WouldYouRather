import React, { Component } from 'react';
import LeaderComponent from './Reusables/LeaderComponent';

const arr = [1, 2,3,4,5,6,7,8,9];


class Leaderboard extends Component {

  render() {
    return (
      <div>
        {
         
            arr.map((element)=><LeaderComponent />)
 



        }

      </div>
    )
  }


}

export default Leaderboard;