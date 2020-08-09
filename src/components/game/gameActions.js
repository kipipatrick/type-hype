import GameServices from './gameServices';
import history from '../../history';

export const GameActionsTypes = {
    GAME_REQUEST: '@@GAME_REQUEST',
    GAME_SUCCESS: '@@GAME_SUCCESS',
    GAME_FAILED: '@@GAME_FAILED',
    GAME_SUCCESS_SCORES: '@@GAME_SUCCESS_SCORES',
    
}



export const getText = ()=>{
       return async(dispatch)=>{
            try {
                dispatch({type: GameActionsTypes.GAME_REQUEST})
            let text = await GameServices.getText()
   
              dispatch({type: GameActionsTypes.GAME_SUCCESS, payload: text})
            } catch (error) {
                console.log(error.message)
                // dispatch(LoginActionsTypes.LOGIN_FAILED)
            } 
        }
    }
    export const saveScore = (value)=>{
        return async(dispatch)=>{
             try {
                 dispatch({type: GameActionsTypes.GAME_REQUEST})
            await GameServices.saveScore(value)
                history.push('/game')
            //    dispatch({type: GameActionsTypes.GAME_SUCCESS, payload: text})
             } catch (error) {
                 console.log(error.message)
                 // dispatch(LoginActionsTypes.LOGIN_FAILED)
             } 
         }
     }

    export const getScores = ()=>{
        return async(dispatch)=>{
             try {
                dispatch({type: GameActionsTypes.GAME_REQUEST})
             let scores = await GameServices.getScores()
    
            dispatch({type: GameActionsTypes.GAME_SUCCESS_SCORES, payload: scores})
             } catch (error) {
                 console.log(error.message)
                 // dispatch(LoginActionsTypes.LOGIN_FAILED)
             } 
         }
     }


export default {getText, getScores, saveScore}