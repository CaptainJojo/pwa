import React from 'react'
import NavLink from './NavLink'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Nos planetes</h2>

        {/* add some links */}
        <ul>
          <li><NavLink to="/planet/duck"><img src='/duck.png' /></NavLink></li>
          <li><NavLink to="/planet/donut"><img src='/donut.png' /></NavLink></li>
          <li><NavLink to="/planet/cat"><img src='/cat.png' /></NavLink></li>
          <li><NavLink to="/planet/racoon"><img src='/racoon.png' /></NavLink></li>
        </ul>

      </div>
    )
  }
})
