import React from 'react';
import {  Route , HashRouter } from 'react-router-dom';
import './App.css';
import Login from './components/login/login';
import Game from './components/game/game';
import store from './store'
import { Provider } from 'react-redux';



function App() {


  return (
    <Provider store={store()} >
      <HashRouter basename={process.env.PUBLIC_URL} >
        <Route exact path='/' component={Login} />
        <Route exact path={'/game'} component={Game}/>
      </HashRouter>
    </Provider>
  );
}

export default App;
