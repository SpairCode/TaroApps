// defined function modified variable
// defined variable value

import { CATE_MENU } from '../constants/cate'

const INITIAL_STATE = {
  menu: [],
  category: [],
}

export default function cate(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CATE_MENU: {
      const categoryList = action.payload.data.categoryList
      console.log('categoryList', categoryList)
      const menu = categoryList.map(({ id, name }) => ({ id, name }))
      return { 
        ...state,
        menu: menu, 
        category: categoryList
      }
    }
    default:
      return state
  }
}