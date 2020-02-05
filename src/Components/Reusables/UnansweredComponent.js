import React, { Component } from 'react';
import '../Styles/QuestionStyle.css';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';


const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);





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
    selected: null
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
              </h3>
            </div>
            <div class="panel-body two-col">
              <div style={{ textAlign: "center" }} class="row">
                <div class="col-md-3">
                  <div class="">
                    <img height="120px" width="140px" src="https://i.ya-webdesign.com/images/avatar-png-1.png" alt="Flowers" />

                  </div>
                </div>
                <div class="col-md-9">
                  <div class="">
                    <div>
                      <h1 style={{ fontSize: 35 }}>{question.author.toUpperCase()}  <span>ASKS :</span> </h1>
                    </div>
                    <br />

                    <div>
                      <h1 style={{ fontSize: 25 }}>Would You Rather..</h1>
                    </div>
                    <div>
                      <span style={{ fontSize: 15 }}>{question.optionOne.text}/{question.optionTwo.text}</span>
                    </div>






                  </div>
                </div>

              </div>

            </div>
            <div style={{ textAlign: "center" }} class="panel-footer">
              <Button onClick={this.onVote.bind(this)} style={{ height: 50, width: "50%" }} variant="contained" color="secondary">
                <h1>VIEW POLL</h1>
              </Button>
            </div>
          </div>
        </div>
      </div >

    )
  }
}


export default QuestionComponent;