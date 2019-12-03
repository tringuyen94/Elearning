import { REGISTER_COURSE, FETCH_INFORMATION } from "../Actions/ActionType"

let initialInterface = {
  registerCourse: null,
  information: null
}
const InterfaceReducer = (state = initialInterface, action) => {
  switch (action.payload) {
    case REGISTER_COURSE:
      state.course = action.payload
      return { ...state }
    case FETCH_INFORMATION:
      state.information = action.payload
    default:
      return state
  }
}
export default InterfaceReducer
