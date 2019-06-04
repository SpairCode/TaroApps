import { CATE_MENU } from '../constants/cate'
import { createApiAction } from './index'
import api from '../utils/api'
import { bindActionCreators } from 'redux'
import store from '../store'


export const list = createApiAction(CATE_MENU, params => api.get('xhr/list/category.json', params))


export default bindActionCreators({
    list,
  }, store.dispatch)