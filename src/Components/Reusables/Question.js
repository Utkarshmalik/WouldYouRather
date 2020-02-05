import React, { Component } from 'react';
import '../Styles/QuestionStyle.css';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';


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
                <span class="glyphicon glyphicon-circle-arrow-right"></span>Here is a question for you ! </h3>
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
                      <h1 style={{ fontSize: 50 }}>{question.author.toUpperCase()} <span>ASKS :</span> </h1>
                    </div>
                    <div>

                      <br />
                      <br />

                      <h1 style={{ fontSize: 30 }}>Would You Rater ?</h1>
                    </div>
                    <br />
                    <br />


                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="well well-sm ">

                    <Radio
                      checked={this.state.selected === "optionOne"}
                      style={{ marginTop: "-10px" }}
                      onChange={this.handleChange.bind(this)}
                      value="optionOne"
                      name="radio-button-demo"
                    />
                    <label style={{ fontSize: 30 }} >
                      {question.optionOne.text}
                    </label>

                  </div>
                </div>

              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="well well-sm ">

                    <Radio
                      checked={this.state.selected === "optionTwo"}
                      style={{ marginTop: "-10px" }}
                      onChange={this.handleChange.bind(this)}
                      value="optionTwo"
                      name="radio-button-demo"
                    />
                    <label style={{ fontSize: 30 }} >
                      {question.optionTwo.text}
                    </label>

                  </div>
                </div>

              </div>
            </div>
            <div style={{ textAlign: "center", height: 80 }} class="panel-footer">
              <Button onClick={this.onVote.bind(this)} style={{ height: 50, width: "50%" }} variant="contained" color="secondary">
                <h1>VOTE</h1>
              </Button>

            </div>
          </div>
        </div>
      </div>

    )
  }
}


export default QuestionComponent;