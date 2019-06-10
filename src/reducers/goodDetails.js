import { GOOD_DETAILS } from '../constants/goodDetails'

const INITIAL_STATE = {
  goodDetails: {}
}

export default function goodDetails(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GOOD_DETAILS: {
      return {
        ...state,
        goodDetails: action.payload.data
      }
    }
    default:
      return state
  }
}