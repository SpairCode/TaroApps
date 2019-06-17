// defined function modified variable
// defined variable value

import { CATE_MENU, CATE_SUB, SUB_LIST } from '../constants/cate'

const INITIAL_STATE = {
  menu: [],
  category: [],
  subs: [],
  subsTitle: '',
  subsList: [],
  status: 0,
}

export default function cate(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CATE_MENU: {
      const categoryList = action.payload.data.categoryList
      const menu = categoryList.map(({ id, name }) => ({ id, name }))
      return { 
        ...state,
        menu: menu, 
        category: categoryList,
        status: 200,
      }
    }
    case CATE_SUB: {
      const sub = action.payload.data.category
      const subs = sub.subCategoryList.map(({ id, name }) => ({ id, name }))
      return {
        ...state,
        subs: subs,
        subsTitle: sub.name
      }
    }
    case SUB_LIST: {
      const { itemList } = action.payload.data
      return {
        ...state,
        subsList: itemList
      }
    }
    default:
      return state
  }
}