
import LoginServices from './loginServices';


export const LoginActionsTypes = {
    LOGIN_REQUEST: '@@LOGIN_REQUEST',
    LOGIN_SUCCESS: '@@LOGIN_SUCCESS',
    LOGIN_FAILED: '@@LOGIN_FAILED',
}



export const login =(email,password, history)=>{

        return (dispatch)=>{
        
            try {
       
                console.log(email,password )
            //  dispatch(LoginActionsTypes.LOGIN_REQUEST)
                let user = LoginServices.login(email, password)
                if(user){
              history.push('/game')
                }
              dispatch({type: LoginActionsTypes.LOGIN_SUCCESS, payload: user})
            } catch (error) {
                console.log(error.message)
                // dispatch(LoginActionsTypes.LOGIN_FAILED)
            } 
        }
    }


export default {login}