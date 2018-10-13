import React from 'react'
import './Journey.css'

// Component used to display a journey
const Journey = ({ destination, price }) => (
    <div>
        <div>
            <h1>Destination: {destination}</h1>
            <p>Price: {price}</p>
        </div>
    </div>
)

export default Journey;

