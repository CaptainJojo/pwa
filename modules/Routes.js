import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import Planets from './Planets'
import Planet from './Planet'
import Home from './Home'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/planets" component={Planets} />
    <Route path="/planet/:name" component={Planet}/>
  </Route>
)
