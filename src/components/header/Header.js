import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <div className="App">
      <div className="App-header">
        <img src="https://cdn-images-1.medium.com/fit/t/1600/480/1*sxMljQ8wgso4cG3PxufTmQ.png" className="App-logo" alt="logo" />
        <h2>Your first GraphQL Component</h2>
      </div>
    </div>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/journeys'>List of journeys</Link></li>
        <li><Link to='/journeyDisplay'>Display a journey</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
