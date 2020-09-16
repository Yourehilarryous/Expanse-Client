import React from 'react';
import './App.css';
import Header from './components/layout/Header';
// import Routes from './config/routes'
import Main from './Pages/Main'
import Genre from './Pages/Genre'
import Profile from './Pages/Profile'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import {Grid} from '@material-ui/core'



function App() {

    return (
      <div className="App">
        <Grid container direction='column'>
          <Grid item>
            <Header />
          </Grid>
          <Grid item container>
            <Grid item xs={0} sm={2} />
              <Grid item xs={12} sm={8}>
                <BrowserRouter>
                  <Switch>
                      <Route exact path='/' component={ Main }/>
                      <Route exact path='/genre' component={ Genre }/>
                      <Route exact path='/login' component={ Login }/>
                      <Route exact path='/register' component={ Register }/>
                      <Route path='/profile' component={ Profile }/>
                  </Switch>
                </BrowserRouter>
              </Grid>
              <Grid item xs={0} sm={2}/>
            </Grid>
          </Grid>     
      </div>
    );
}

export default App;
