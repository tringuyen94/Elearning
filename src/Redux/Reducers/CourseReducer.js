import {
  FETCH_COURSES_BY_CATEGORIES,
  ADD_COURSE_TO_CART,
  FETCH_COURSE,
  REMOVE_COURSE_FROM_CART
} from "../Actions/ActionType"
let initialCourse = {
  courseAll: null,
  courses: null,
  addedCourseCart: [],
  lengthCart: 0
}

const CourseReducer = (state = initialCourse, action) => {
  switch (action.type) {
    case FETCH_COURSES_BY_CATEGORIES:
      state.courses = action.payload
      return { ...state }
    case REMOVE_COURSE_FROM_CART:
      const id = state.addedCourseCart.indexOf(action.payload)
      state.addedCourseCart.splice(id, 1)
      state.lengthCart--
      return { ...state }
    case ADD_COURSE_TO_CART:
      state.addedCourseCart.push(action.payload)
      state.lengthCart++
      return { ...state }
    case FETCH_COURSE:
      state.courseAll = action.payload
      return { ...state }
    default:
      return state
  }
}
export default CourseReducer
