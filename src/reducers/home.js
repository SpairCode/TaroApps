import { HOME, RECOMMEND } from '../constants/home'

const INITIAL_STATE = {
  home: [],
  recommendList: []
}

export default function home(state = INITIAL_STATE, action) {
  switch(action.type) {
    case HOME: {
      return {
        ...state,
        home: action.payload.data
      }
    }
    case RECOMMEND: {
      return {
        ...state,
        recommendList: action.payload.data.rcmdItemList
      }
    }
    default:
      return state
  }
}