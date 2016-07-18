import { Link } from 'react-router'
import React from 'react'
import NavLink from './NavLink'
import Home from './Home'
import { IndexLink } from 'react-router'


export default React.createClass({
  render() {
    return (
      <div>
        <h1>Nos planetes</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/planets">Planete</NavLink></li>
        </ul>

        {/* add this */}
        {this.props.children || <Home/>}

      </div>
    )
  }
})
