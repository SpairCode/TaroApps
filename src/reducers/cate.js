// defined function modified variable
// defined variable value

import { CATE_MENU, CATE_SUB } from '../constants/cate'

const INITIAL_STATE = {
  menu: [],
  category: [],
  subs: [],
  subsTitle: ''
}

export default function cate(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CATE_MENU: {
      const categoryList = action.payload.data.categoryList
      const menu = categoryList.map(({ id, name }) => ({ id, name }))
      return { 
        ...state,
        menu: menu, 
        category: categoryList
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
    default:
      return state
  }
}