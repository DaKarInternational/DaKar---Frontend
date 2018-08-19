import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './../home/Home'
import JourneyList from './../journey-list/JourneyList'
import JourneyDisplay from './../journey-display/JourneyDisplay'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/journeys' component={JourneyList} />
      <Route path='/journeyDisplay' component={JourneyDisplay} />
    </Switch>
  </main>
)

export default Main;