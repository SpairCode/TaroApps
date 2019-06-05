import { CATE_MENU, CATE_SUB } from '../constants/cate'
import { createApiAction } from './index'
import api from '../utils/api'
import { bindActionCreators } from 'redux'
import store from '../store'

export const list = createApiAction(CATE_MENU, params => api.get('xhr/list/category.json', params))
export const subs =  createApiAction(CATE_SUB, params => api.get('xhr/list/subCate.json', params))

export default bindActionCreators({
    list,
    subs
  }, store.dispatch)