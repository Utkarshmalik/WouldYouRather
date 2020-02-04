import { currentLoggedInUser } from '../Types';
import { LogoutUser } from '../Types';


export default (state = null, action) => {

  switch (action.type) {

    case currentLoggedInUser:
      return action.id

    case LogoutUser:
      return null

    default:
      return state
  }
}
