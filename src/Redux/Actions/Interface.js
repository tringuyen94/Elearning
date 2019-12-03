import InterfaceService from "../../Services/interface"
import { REGISTER_COURSE, FETCH_INFORMATION } from "./ActionType"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// Async action
export const registerCourse = value => {
  const registerNoti = () => toast("Register Course successfully!")

  return dispatch => {
    InterfaceService.registerCourse(value)
      .then(res => {
        console.log(res)
        registerNoti()
        dispatch(actRegisterCourse(res.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}
export const fetchInformation = value => {
  return dispatch => {
    InterfaceService.fetchInformation(value)
      .then(res => {
        console.log(res)
        dispatch(actFetchInformation(res.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

// Action Redux

export const actRegisterCourse = course => {
  return {
    type: REGISTER_COURSE,
    payload: course
  }
}

export const actFetchInformation = inform => {
  return {
    type: FETCH_INFORMATION,
    payload: inform
  }
}
