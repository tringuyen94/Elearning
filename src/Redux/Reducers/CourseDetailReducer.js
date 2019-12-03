import { FETCH_COURSE_DETAIL } from "../Actions/ActionType"

let initialCourseDetail = {
  courseDetail: null
}

const CourseDetailReducer = (state = initialCourseDetail, action) => {
  switch (action.type) {
    case FETCH_COURSE_DETAIL:
      state.courseDetail = action.payload
      return { ...state }

    default:
      return state
  }
}

export default CourseDetailReducer
