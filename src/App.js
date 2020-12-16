import React from 'react';
import './App.css';
import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom'
import HomePage from './home'
import Products from './Products'

const App = () => {
  return (
      <BrowserRouter>
      <div> 
        <Route path='/home' component={HomePage}/>
        <Route path='/Products' component={Products}/>
      </div>
      <Redirect from='/' to='/home' />
      </BrowserRouter>
  )
}

export default App; 