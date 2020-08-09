import { handleActions } from "redux-actions";
import { LoginActionsTypes } from "./loginActions";


const initialState = {
  user: null,
  loading: false,
  error: null
};

export default handleActions(
  {
    [LoginActionsTypes.LOGIN_REQUEST]: (state, action) => {
      return {
        ...state,
        loading: true
      };
    },
    [LoginActionsTypes.LOGIN_SUCCESS]: (state, action) => {
      return {
        ...state,
        user: action.payload
      };
    },
    [LoginActionsTypes.LOGIN_FAILED]: (state, action) => {
      return {
        ...state,
        error: action.payload
      };
    },
    [LoginActionsTypes.CLEAR]: (state, action) => {
      return {
        initialState
      };
    }
  },
  initialState
);
