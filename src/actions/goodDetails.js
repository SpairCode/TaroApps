import { GOOD_DETAILS } from '../constants/cate'
import { createApiAction } from './index'
import api from '../utils/api'
import { bindActionCreators } from 'redux'
import store from '../store'

export const good = createApiAction(GOOD_DETAILS, params => api.get('/xhr/item/detail.json?', params))

export default bindActionCreators({
  good
  }, store.dispatch)