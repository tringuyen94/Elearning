import {
  FETCH_CREDENTIALS,
  LOG_OUT,
  FETCH_FACEBOOK,
} from "../Actions/ActionType"

let initialCredential = {
  credentials: null,
  profile: null
}

const CredentialReducer = (state = initialCredential, action) => {
  switch (action.type) {
    case FETCH_CREDENTIALS:
      state.credentials = action.payload
      return { ...state }
    case LOG_OUT:
      state.credentials = action.payload
      return { ...state }
    case FETCH_FACEBOOK:
      state.credentials = action.payload
      return { ...state }
    default:
      return state
  }
}

export default CredentialReducer
