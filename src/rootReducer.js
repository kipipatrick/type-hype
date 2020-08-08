import { combineReducers } from 'redux';
import loginReducers from './components/login/loginReducer';
import gameReducers from './components/game/gameReducers';
export default combineReducers({
    auth : loginReducers,
    game: gameReducers
});