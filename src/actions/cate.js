import { CATE_MENU } from '../constants/cate'
import { API_CATE } from '../constants/api'
import { createAction } from '../utils/redux'
import api from '../utils/api'


export const list = createAction(CATE_MENU, params => api.get(API_CATE, params))

/**
 * 子级菜单
 * @param {*} payload
 */
// export const dispatchSubMenu = payload => createAction({
//   url: API_CATE_SUB,
//   type: CATE_SUB,
//   payload
// })

/**
 * 子级列表
 * @param {*} payload
 */
// export const dispatchSubList = payload => createAction({
//   url: API_CATE_SUB_LIST,
//   type: CATE_SUB_LIST,
//   cb: res => ({ ...res, id: payload.categoryL2Id }),
//   payload
// })
