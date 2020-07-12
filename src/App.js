import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from './components/shared/Header';
import Stage from './components/Stages/Stage';

import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className='App' style={{ backgroundColor: "#f8f8ff" }}>
        <Header/>
        <div className=' container container-fluid d-flex justify-content-center shadow-sm' style={{ maxWidth:1100 , backgroundColor: "#FFFFFF" }}>
          <Switch>
            <Route exact path='/' render={() =>  <Redirect to='/stages' /> }/>
            <Route exact path='/stages' component={Stage} />
          </Switch>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
