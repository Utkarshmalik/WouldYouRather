import React, { Component } from 'react';
import '../Components/Styles/QuestionStyle.css';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import { ProgressBar } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';



const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);



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
    option1: "",
    option2: ""
  }

  onOptionOneChange(e) {
    console.log(e.target.value)
    this.setState({
      optionOne: e.target.value
    })
  }
  onOptionTwoChange(e) {
    console.log(e.target.value)
    this.setState({
      optionTwo: e.target.value
    })
  }

  onPost() {
    console.log(this.state.optionOne)
    console.log(this.state.optionTwo)

  }

  render() {

    return (
      <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
        <div class="col-md-8">
          <div class="panel panel-primary">
            <div class="panel-heading">
              <h3 class="panel-title">
                <span class="glyphicon glyphicon-circle-arrow-right"></span>Create New Question: </h3>
            </div>
            <div class="panel-body two-col">
              <div class="row">
                <div class="col-md-12">
                  <div class="">
                    <h1>Complete the question : </h1>
                    <hr />

                  </div>
                </div>

                <br /><br /><br /><br /><br /><br />


                <div class="col-md-12">
                  <div class="">
                    <h1 style={{ fontSize: 50 }}>Would you rather : </h1>
                    <hr />

                  </div>
                </div>

              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="well well-sm">
                    <h1>
                      <TextField

                        size="large"
                        style={{ margin: 8, fontSize: "200px" }}
                        placeholder="Option1"
                        fullWidth
                        onChange={this.onOptionOneChange.bind(this)}
                      />
                    </h1>

                  </div>
                </div>

              </div>



              <div class="row">
                <div class="col-md-12">

                  <h2 style={{ textAlign: "center" }} > OR </h2>

                </div>

              </div>



              <div class="row">
                <div class="col-md-12">
                  <div class="well well-sm">
                    <TextField

                      style={{ margin: 8 }}
                      placeholder="Option2"
                      fullWidth
                      margin="normal"
                      onChange={this.onOptionTwoChange.bind(this)}

                    />
                  </div>
                </div>

              </div>
            </div>
            <div style={{ textAlign: "center" }} class="panel-footer">

              <Button onClick={this.onPost.bind(this)} style={{ height: 50, width: "50%" }} variant="contained" color="secondary">
                <h1>SUBMIT</h1>
              </Button>
            </div>
          </div>
        </div>
      </div>

    )
  }
}


export default QuestionComponent;