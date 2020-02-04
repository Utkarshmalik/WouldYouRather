import { currentLoggedInUser } from '../Types';
import { LogoutUser } from '../Types';
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