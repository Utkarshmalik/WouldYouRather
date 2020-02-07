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

    console.log(this.props)

    const answered = Object.keys(this.props.user.answers).length;
    const created = this.props.user.questions.length;
    const score = answered + created;
    const name = this.props.user.name;
    const avatarURL = this.props.user.avatarURL;

    console.log(answered);
    console.log(created)
    console.log(name)
    console.log(avatarURL)

    return (
      <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
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
                    <img height="120px" width="140px" src={avatarURL} alt="Flowers" />

                  </div>
                </div>
                <div class="col-md-6">
                  <div class="">
                    <div>
                      <h1 style={{ fontSize: 40 }}>{name}  </h1>
                    </div>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />




                  </div>
                </div>
                <div class="col-md-3">
                  <div class="">
                    <Paper style={{ height: 130 }} elevation={5} >
                      <div style={{ textAlign: "center", fontSize: 30 }}> Score:
                      <div style={{ textAlign: "center", fontSize: 55 }}> {score} </div>


                      </div>
                    </Paper>


                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div style={{ textAlign: "center" }} class="well well-sm ">


                    <label style={{ fontSize: 30 }} >
                      {`Answered Questions : ${answered}`}
                    </label>

                  </div>
                </div>

              </div>
              <div class="row">
                <div class="col-md-12">
                  <div style={{ textAlign: "center" }} class="well well-sm ">

                    <label style={{ fontSize: 30 }} >
                      {`Created Questions : ${created}`}
                    </label>

                  </div>
                </div>

              </div>
            </div>
            <div style={{ textAlign: "center" }} class="panel-footer">


            </div>
          </div>
        </div>
      </div >

    )
  }
}


export default QuestionComponent;