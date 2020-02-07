import { currentLoggedInUser } from '../Types';
import { LogoutUser } from '../Types';


// const initialState = {
//   id: 'sarahedo',
//   name: 'Sarah Edo',
//   avatarURL: 'https://www.pngarts.com/files/3/Avatar-PNG-Pic.png',
//   answers: {
//     "8xf0y6ziyjabvozdd253nd": 'optionOne',
//     "6ni6ok3ym7mf1p33lnez": 'optionTwo',
//     "am8ehyc8byjqgar0jgpub9": 'optionTwo',
//     "loxhs1bqm25b708cmbf3g": 'optionTwo'
//   }
// };

const initialState = null;



export default (state = initialState, action) => {



  switch (action.type) {

    case currentLoggedInUser:
      return action.id

    case LogoutUser:
      return null

    default:
      return state
  }
}
