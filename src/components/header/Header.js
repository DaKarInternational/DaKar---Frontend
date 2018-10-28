import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <div className="App">
      <div className="App-header">
        <h2>Dakar</h2>
      </div>
    </div>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/journeys'>List of journeys</Link></li>
        <li><Link to='/journeyDisplay'>Display a journey</Link></li>
        <li><Link to='/createJourney'>Create a journey</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
