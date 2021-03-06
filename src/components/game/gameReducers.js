import { handleActions } from "redux-actions";
import { GameActionsTypes } from "./gameActions";


const initialState = {
  text: null,
  loading: false,
  error: null,
  scores: [],
  saved: null
};

export default handleActions(
  {
    [GameActionsTypes.GAME_REQUEST]: (state, action) => {
      return {
        ...state,
        loading: true
      };
    },
    [GameActionsTypes.GAME_SUCCESS]: (state, action) => {
      return {
        ...state,
 
        text: action.payload
      };
    },
    [GameActionsTypes.SAVE_GAME]: (state, action) => {
      return {
        ...state,
 
        saved: action.payload
      };
    },
    [GameActionsTypes.GAME_SUCCESS_SCORES]: (state, action) => {
        return {
          ...state,
    
          scores: action.payload
        };
      }
  },
  initialState
);
