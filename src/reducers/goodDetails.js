import { GOOD_DETAILS } from '../constants/goodDetails'

const INITIAL_STATE = {
  goodDetails: []
}

export default function goodDetails(state = INITIAL_STATE, action) {
  debugger
  switch(action.type) {
    case GOOD_DETAILS: {
      console.log('action', action)
      return {
        ...state,
        goodDetails: action
      }
    }
    default:
      return state
  }
}