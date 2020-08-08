import React from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login/login';
import Game from './components/game/game';
import store from './store'
import { Provider } from 'react-redux';
import history from './history';
import TypingTest from './components/game/typeTest';


function App() {


  return (
    <Provider store={store()} >
      <Router history={history}>
        <Route exact path='/' component={Login} />
        <Route path='/game' component={Game}/>
        <Route path='/test' component={TypingTest}/>
        <Route path='/results' render={()=> 'Results'}/>
      </Router>
    </Provider>
  );
}

export default App;
