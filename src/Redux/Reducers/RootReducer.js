import { combineReducers } from "redux"
import CourseReducer from "./CourseReducer"
import CategoryReducer from "./CategoryReducer"
import CredentialReducer from "./CredentialReducer"
import CourseDetailReducer from "./CourseDetailReducer"
import InterfaceReducer from "./InterfaceReducer"

const RootReducer = combineReducers({
  course: CourseReducer,
  category: CategoryReducer,
  credential: CredentialReducer,
  courseDetail: CourseDetailReducer,
  interface: InterfaceReducer
})

export default RootReducer
