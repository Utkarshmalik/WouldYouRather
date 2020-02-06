import React, { Component } from 'react';
import '../Styles/QuestionStyle.css';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);






class QuestionComponent extends Component {

  state = {
    selected: null
  }

  handleChange(e) {
    this.setState({
      selected: e.target.value
    })
  }

  onViewPoll() {

    console.log(this.props);

  }

  render() {

    const { optionOne, optionTwo, id } = this.props.question
    const { author, avatar } = this.props;


    console.log(this.props)


    console.log(optionOne)

    return (
      <div style={{ display: 'flex', flex: 1, justifyContent: 'center', marginTop: '40px' }}>


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
                    <img height="120px" width="140px" src={avatar} alt="Flowers" />

                  </div>
                </div>
                <div class="col-md-9">
                  <div class="">
                    <div>
                      <h1 style={{ fontSize: 35 }}>{author.toUpperCase()}  <span>ASKS :</span> </h1>
                    </div>
                    <br />

                    <div>
                      <h1 style={{ fontSize: 25 }}>Would You Rather.....</h1>
                    </div>
                    <div>
                      <span style={{ fontSize: 15 }}>{optionOne.text}/{optionTwo.text}</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
            <div style={{ textAlign: "center" }} class="panel-footer">
              <Link to={`/question/:${id}`} >
                <Button onClick={this.onViewPoll.bind(this)} style={{ height: 50, width: "50%" }} variant="contained" color="secondary">
                  <h1>VIEW POLL</h1>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div >

    )
  }
}
const mapStateToProps = (state, myProps) => {

  console.log(state)
  console.log(myProps)

  return ({
    author: state.RegisteredUsers[myProps.question.author].name,
    avatar: state.RegisteredUsers[myProps.question.author].avatarURL,
    question: myProps.question
  })

}


export default connect(mapStateToProps)(QuestionComponent);