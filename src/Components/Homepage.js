import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentLoggedInUser } from '../Types';
import { Button } from '@material-ui/core';
import homepageStyle from './Styles/homepageStyle.css';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import QuestionComponent from './Reusables/UnansweredComponent';
import UnansweredList from './UnansweredList';


class HomePage extends Component {

  state = {
    currentState: "unanswered"
  }


  onPressUnasweredQustions() {

    if (this.state.currentState != "unanswered")
      this.setState({ currentState: "unanswered" })

    console.log("unanswered");

  }


  onPressAnsweredQustions() {

    if (this.state.currentState != "answered")
      this.setState({ currentState: "answered" })

    console.log("answered");
  }

  render() {

    console.log(this.props)


    return (
      <div style={{ display: "flex", justifyContent: "center", color: "black" }} >

        <div class="col-md-10">
          <div class="panel panel-primary">
            <div class="panel-heading">
              <h3 class="panel-title">
                <span class="glyphicon glyphicon-circle-arrow-right"></span> <span className="font3"> Here is a question for you ! </span> </h3>
            </div>
            <div class="panel-body two-col">
              <div class="row">
                <div class="col-md-6 center">
                  <div class="">
                    <Button className="button" onClick={this.onPressUnasweredQustions.bind(this)} variant="contained">
                      Unaswered Questions
              </Button>
                  </div>

                </div>
                <div class="col-md-6 center">
                  <div class="">
                    <Button className="button" onClick={this.onPressAnsweredQustions.bind(this)} variant="contained">
                      Answered Questions
          </Button>
                  </div>
                </div>


              </div>
              <div class="row center">
                <div class="col-md-12">

                  {
                    (this.state.currentState === "unanswered") ? (

                      this.props.unanswered.map((question) => <QuestionComponent key={question.id} question={question} />
                      )




                    ) : (
                        this.props.answered.map((question) => <QuestionComponent key={question.id} question={question} />
                        )
                      )

                  }

                </div>



              </div>

              <div class="panel-footer center">

              </div>

            </div>
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)



  const currentLoggedInUserAnswers = state.RegisteredUsers[state.currentLoggedInUser].answers;
  const questions = state.questions

  const unanswered = Object.keys(questions)
    .filter(key => currentLoggedInUserAnswers[key] === undefined)
    .map(key => questions[key])
    .sort(function (a, b) { return a.timestamp - b.timestamp })



  const answered = Object.keys(currentLoggedInUserAnswers)
    .map(key => { return ({ ...questions[key], answer: currentLoggedInUserAnswers[key] }) })
    .sort(function (a, b) { return a.timestamp - b.timestamp })


  console.log(unanswered);
  console.log(answered);


  return (
    {
      currentUser: state.currentLoggedInUser,
      answered,
      unanswered

    })
}

export default connect(mapStateToProps)(HomePage);