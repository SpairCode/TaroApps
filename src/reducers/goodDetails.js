import { GOOD_DETAILS } from '../constants/goodDetails'

const INITIAL_STATE = {
  goodDetails: []
}

export default function cate(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GOOD_DETAILS: {
      debugger
      console.log(action.payload)
    }
    default:
      return state
  }
}