import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './../home/Home'
import JourneyList from './../journey-list/JourneyList'
import JourneyDisplay from './../journey-display/JourneyDisplay'
import CreateJourney from './../create-journey/CreateJourney'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/journeys' component={JourneyList} />
      <Route path='/journeyDisplay' component={JourneyDisplay} />
      <Route path='/createJourney' component={CreateJourney} />
    </Switch>
  </main>
)

export default Main;