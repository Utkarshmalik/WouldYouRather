import { currentLoggedInUser, updateUserAnswer, updateQuestionAnswer } from '../Types';
import { LogoutUser } from '../Types';
import { _saveQuestionAnswer } from '../data';


export const tempAction = () => {
  return (
    {
      type: "",
      data: []
    })
}


export const AuthLogin = (id) => {
  console.log(id)
  return ({
    type: currentLoggedInUser,
    id
  })
}


export const AuthLogout = () => {
  return ({
    type: LogoutUser
  })
}

export const updationQuestionAnswer = (authedUser, qid, answer) => {

  const data = {
    authedUser,
    qid, answer
  }
  return ({
    type: updateQuestionAnswer,
    payload: data
  })

}

export const onSubmitAnswer = (authedUser, qid, answer) => {

  const data = {
    authedUser,
    qid, answer
  }
  return ({
    type: updateUserAnswer,
    payload: data
  })

}