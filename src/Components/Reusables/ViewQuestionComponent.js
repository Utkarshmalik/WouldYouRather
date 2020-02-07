import React, { Component } from 'react';
import '../Styles/QuestionStyle.css';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { ProgressBar } from 'react-bootstrap'
import { onSubmitAnswer, updationQuestionAnswer } from '../../Actions/shared';

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


class ViewQuestionComponent extends Component {

  state = {
    selected: null
  }

  handleChange(e) {
    this.setState({
      selected: e.target.value
    })
  }

  onVote() {
    if (this.state.selected != null) {

      //call the action creator from here 

      const user_id = this.props.currentUser.id;
      const question_id = this.props.question.id;
      const RegisteredUsers = this.props.RegisteredUsers;
      const answer = this.state.selected;

      this.props.dispatch(onSubmitAnswer(user_id, question_id, answer));
      this.props.dispatch(updationQuestionAnswer(user_id, question_id, answer));

    }
  }

  render() {

    console.log(this.props)
    const authorName = this.props.author.name
    const avatar = this.props.author.avatarURL
    const { answer } = this.props;
    console.log(avatar)
    const optionOne = this.props.question.optionOne.text;
    const optionTwo = this.props.question.optionTwo.text;

    const countVotes1 = this.props.question.optionOne.votes.length;
    const countVotes2 = this.props.question.optionTwo.votes.length;
    const total = countVotes1 + countVotes2

    const prcnt1 = (countVotes1 * 100) / total;
    const prcnt2 = (countVotes2 * 100) / total;



    console.log(prcnt1)
    console.log(prcnt2)



    return (
      (!this.props.alreadyAnswered) ? (
        <div className="question-main">
          <div class="col-md-6">
            <div class="panel panel-primary">
              <div class="panel-heading">
                <h3 class="panel-title">
                  <span class="glyphicon glyphicon-circle-arrow-right"></span> <span className="font3"> Here is a question for you ! </span> </h3>
              </div>
              <div class="panel-body two-col">
                <div class="row">
                  <div class="col-md-4">
                    <div class="">
                      <img className="avatar" src={`${avatar}`} alt="Flowers" />

                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="">
                      <div>
                        <div className="head1" >{authorName} <span>ASKS :</span> </div>
                      </div>
                      <div>

                        <br />
                        <br />

                        <span className="head2">Would You Rater ?</span>
                      </div>
                      <br />
                      <br />


                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="well well-sm  RadioBox">

                      <Radio
                        checked={this.state.selected === "optionOne"}

                        onChange={this.handleChange.bind(this)}
                        value="optionOne"
                        name="radio-button-demo"
                      />
                      <label className="head3">
                        {optionOne}
                      </label>

                    </div>
                  </div>

                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="well well-sm RadioBox">

                      <Radio
                        checked={this.state.selected === "optionTwo"}
                        onChange={this.handleChange.bind(this)}
                        value="optionTwo"
                        name="radio-button-demo"
                      />
                      <label className="head3">
                        {optionTwo}
                      </label>

                    </div>
                  </div>

                </div>
              </div>

              <div class="panel-footer center">
                <Button className="button" onClick={this.onVote.bind(this)} variant="contained">
                  <div className="head3">VOTE</div>
                </Button>
              </div>

            </div>
          </div>
        </div >


      ) : (
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
                        <img height="120px" width="140px" src={avatar} alt="Flowers" />

                      </div>
                    </div>
                    <div class="col-md-9">
                      <div class="">
                        <div>
                          <h1 style={{ fontSize: 40 }}> Asked By {authorName} </h1>
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
                          {optionOne}
                          <br />
                        </div>
                        <ProgressBar style={{ height: 20 }} now={prcnt1} label={`${prcnt1}% ${(answer === 'optionOne') ? " (Your Vote) " : ""} `} />

                        <div style={{ marginTop: "-10px" }}>
                          ({countVotes1} out of {total})
                        </div>

                      </div>
                    </div>

                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="well well-sm">
                        <div style={{ fontSize: 15 }}>
                          {optionTwo}
                          <br />
                        </div>
                        <ProgressBar style={{ height: 20 }} now={prcnt2} label={`${prcnt2}% ${(answer === 'optionTwo') ? " (Your Vote) " : ""} `} />

                        <div style={{ marginTop: "-10px" }}>
                          ({countVotes2} out of {total})
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


    )
  }
}

const mapStateToProps = (state, myProps) => {

  console.log(state)

  const questionId = myProps.match.params.id.slice(1)
  const { questions, RegisteredUsers } = state;
  const currentUser = RegisteredUsers[state.currentLoggedInUser];
  const alreadyAnswered = currentUser.answers[questionId] !== undefined
  const answer = (alreadyAnswered) ? (currentUser.answers[questionId]) : null;
  const question = questions[questionId];
  const author = RegisteredUsers[question.author]



  console.log(questionId)
  console.log(currentUser)


  return ({
    RegisteredUsers,
    currentUser,
    alreadyAnswered,
    answer,
    question,
    author

  })

}

export default connect(mapStateToProps)(ViewQuestionComponent);