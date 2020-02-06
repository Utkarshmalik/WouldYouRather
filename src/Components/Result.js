import React, { Component } from 'react';
import '../Components/Styles/QuestionStyle.css';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import { ProgressBar } from 'react-bootstrap'


const now = 60;




let question = {
  id: '8xf0y6ziyjabvozdd253nd',
  author: 'sarahedo',
  timestamp: 1467166872634,
  optionOne: {
    votes: ['sarahedo'],
    text: 'have horrible short term memory',
  },
  optionTwo: {
    votes: [],
    text: 'have horrible long term memory'
  }
}


class QuestionComponent extends Component {

  state = {
    yourVote:"optionOne"
  }

  handleChange(e) {
    this.setState({
      selected: e.target.value
    })
  }

  onVote() {
    console.log("Vote from here");
  }

  render() {

    return (
      <div>
        <div class="col-md-6">
          <div class="panel panel-primary">
            <div class="panel-heading">
              <h3 class="panel-title">
                <span class="glyphicon glyphicon-circle-arrow-right"></span>Here are the results ! </h3>
            </div>
            <div class="panel-body two-col">
              <div class="row">
                <div class="col-md-3">
                  <div class="">
                    <img height="120px" width="140px" src="https://i.ya-webdesign.com/images/avatar-png-1.png" alt="Flowers" />

                  </div>
                </div>
                <div class="col-md-9">
                  <div class="">
                    <div>
                      <h1 style={{ fontSize: 40 }}> Asked By {question.author.toUpperCase()} </h1>
                    </div>
                    <div>

                      <br />
                      <br />

                      <h1 style={{ fontSize: 30 }}> The Results are : </h1>
                    </div>
                    <br />
                    <br />


                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="well well-sm">
                    <div style={{ fontSize: 15 }}>
                      {question.optionOne.text}
                      <br />
                    </div>
                    <ProgressBar style={{ height: 20 }} now={now} label={`${now}% ${(this.state.yourVote==='optionOne')?" (Your Vote) ":"" } `} />

                    <div style={{ marginTop: "-10px" }}>
                      {` (2 out of 3) `}
                    </div>

                  </div>
                </div>

              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="well well-sm">
                    <div style={{ fontSize: 15 }}>
                      {question.optionTwo.text}
                      <br />
                    </div>
                    <ProgressBar style={{ height: 20 }} now={now} label={`${now}% ${(this.state.yourVote==='optionTwo')?" (Your Vote) ":"" } `}/>

                    <div style={{ marginTop: "-10px" }}>
                      {` (2 out of 3) `}
                    </div>

                  </div>
                </div>

              </div>
            </div>
            <div style={{ textAlign: "center", height: 20 }} class="panel-footer">


            </div>
          </div>
        </div>
      </div>

    )
  }
}


export default QuestionComponent;