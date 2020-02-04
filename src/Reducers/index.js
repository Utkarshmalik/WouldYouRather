import { combineReducers } from 'redux';
import RegisteredUsers from './UsersReducer'
import currentLoggedInUser from './AuthReducer'

export default combineReducers({
  RegisteredUsers,
  currentLoggedInUser
})





