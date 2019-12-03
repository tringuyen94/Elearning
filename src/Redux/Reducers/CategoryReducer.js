import { FETCH_CATEGORIES } from "../Actions/ActionType"
let initialCategories = {
  categories: null
}

const CategoryReducer = (state = initialCategories, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      state.categories = action.payload
      return { ...state }
    default:
      return state
  }
}
export default CategoryReducer
