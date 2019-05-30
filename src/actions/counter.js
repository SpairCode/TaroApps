// import constants defined variable
// defined function modified variable
import Taro from '@tarojs/taro'
import { ADD, MINUS} from '../constants/counter'
import { createAction } from '../utils/redux'
import { API_CATE } from '../constants/api'

export const add = () => {
  return {
    type: ADD
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}

// 异步的 action
export function asyncAdd () {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}

// export const demos = () => Taro.request({
//   url: API_CATE,
//   type: 'CATE_MENU',
//   header: {
//     'content-type': 'application/json'
//   }
// }).then((res) => {
//   return res.data
// })

