import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import Main from '../Pages/Main'
import Genre from '../Pages/Genre'
import Profile from '../Pages/Profile'

export default (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Main }/>
            <Route exact path='/genre' component={ Genre }/>
            <Route path='/profile/:id' component={ Profile }/>
        </Switch>
    </BrowserRouter>
)

