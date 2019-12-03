import CourseService from "../../Services/courses"
import {
  FETCH_CATEGORIES,
  FETCH_COURSES_BY_CATEGORIES,
  FETCH_COURSE_DETAIL,
  ADD_COURSE_TO_CART,
  FETCH_COURSE,
  REMOVE_COURSE_FROM_CART
} from "./ActionType"

//ASYNC ACTION
export const fetchCategories = () => {
  return dispatch => {
    CourseService.fetchCategories()
      .then(res => {
        console.log(res)
        dispatch(actFetchCategories(res.data))
      })
      .catch(err => console.log(err))
  }
}
export const fetchCourseByCategories = maDanhMuc => {
  return dispatch => {
    CourseService.fetchCourseByCategories(maDanhMuc)
      .then(res => {
        console.log(res.data)
        dispatch(actFetchCourseByCategories(res.data))
      })
      .catch(err => console.log(err))
  }
}

export const fetchCourseDetail = maKhoaHoc => {
  return dispatch => {
    CourseService.fetchCourseDetail(maKhoaHoc)
      .then(res => {
        dispatch(actFetchCourseDetal(res.data))
      })
      .catch(err => console.log(err))
  }
}
export const fetchCourseAll = () => {
  return dispatch => {
    CourseService.fetchCourses()
      .then(res => {
        dispatch(actFetchCourse(res.data))
      })
      .catch(err => console.log(err))
  }
}

// Action Reducer
export const actRemoveItemOnCart = courseId => {
  return {
    type: REMOVE_COURSE_FROM_CART,
    payload: courseId
  }
}

export const actFetchCourse = courseAll => {
  return {
    type: FETCH_COURSE,
    payload: courseAll
  }
}
export const actFetchCategories = categories => {
  return {
    type: FETCH_CATEGORIES,
    payload: categories
  }
}
export const actFetchCourseByCategories = courses => {
  return {
    type: FETCH_COURSES_BY_CATEGORIES,
    payload: courses
  }
}

export const actFetchCourseDetal = course => {
  return {
    type: FETCH_COURSE_DETAIL,
    payload: course
  }
}
export const actAddCourseToCart = course => {
  return {
    type: ADD_COURSE_TO_CART,
    payload: course
  }
}
