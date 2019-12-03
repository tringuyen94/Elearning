import AuthService from "../../Services/authentication"
import {
  FETCH_CREDENTIALS,
  LOG_OUT,
  FETCH_FACEBOOK,
  FETCH_PROFILE
} from "./ActionType"
import { restConnector } from "../../Services/axiosBaseURL"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const notify = () => toast("Login successfully !")
const failedNotify = () => toast("Login failed")
export const fetchCredentials = value => {
  return dispatch => {
    AuthService.fetchCredentials(value)
      .then(res => {
        dispatch(actFetchCredentials(res.data))
        restConnector.defaults.headers[
          "Authorization"
        ] = `Bearer ${res.data.accessToken}`
        localStorage.setItem("login", JSON.stringify(res.data))
        notify()
      })
      .catch(err => failedNotify())
  }
}
export const getCredentialLocal = idLocal => {
  let credential = localStorage.getItem(idLocal)
  let credentiealObj = JSON.parse(credential)
  return credentiealObj
}
export const fetchFacebook = response => {
  return dispatch => {
    dispatch(actFetchFacebook(response))
    restConnector.defaults.headers[
      "Authorization"
    ] = `Bearer ${response.accessToken}`
    localStorage.setItem("login", JSON.stringify(response))
    notify()
  }
}

export const actFetchFacebook = response => {
  return {
    type: FETCH_FACEBOOK,
    payload: response
  }
}
export const actFetchCredentials = credential => {
  return {
    type: FETCH_CREDENTIALS,
    payload: credential
  }
}
export const actLogOut = () => {
  return {
    type: LOG_OUT,
    payload: null
  }
}
