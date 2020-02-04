import { combineReducers } from 'redux';
import RegisteredUsers from './RegisteredUsers'
import CurrentlyLoggedInUser from './CurrentlyLoggedIn'

export default combineReducers({
  RegisteredUsers,
  CurrentlyLoggedInUser
})





