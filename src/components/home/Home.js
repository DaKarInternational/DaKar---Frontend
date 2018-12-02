import React from 'react';
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const Home = () => (
  <div>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/journeys'>List of journeys</Link></li>
        <li><Link to='/journeyDisplay'>Display a journey</Link></li>
        <li><Link to='/createJourney'>Create a journey</Link></li>
      </ul>
    </nav>
  </div>
)

export default Home;