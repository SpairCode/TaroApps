import { GOOD_DETAILS, ITEM_DETAILS } from '../constants/goodDetails'
import { createApiAction } from './index'
import api from '../utils/api'
import { bindActionCreators } from 'redux'
import store from '../store'

export const good = createApiAction(GOOD_DETAILS, params => api.get('xhr/item/detail.json?', params))
export const itemDetail = createApiAction(ITEM_DETAILS, params => api.get('/xhr/rcmd/itemDetail.json', params))

export default bindActionCreators({
  good,
  itemDetail,
  }, store.dispatch)