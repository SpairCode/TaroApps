import { combineReducers } from 'redux'
import cate from './cate'
import goodDetails from './goodDetails'
import home from './home'

export default combineReducers({
  cate,
  goodDetails,
  home
})