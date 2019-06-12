import { HOME, RECOMMEND } from '../constants/home'
import { createApiAction } from './index'
import api from '../utils/api'
import { bindActionCreators } from 'redux'
import store from '../store'

export const home = createApiAction(HOME, params => api.get('xhr/index/index.json', params))
export const recommend = createApiAction(RECOMMEND, params => api.get('xhr/rcmd/index.json', params))

export default bindActionCreators({
  home,
}, store.dispatch)