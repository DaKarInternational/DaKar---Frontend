
import React from 'react'

import './Journey.css'

// Component used to display a journey
const Journey = ({ destination, price }) => (
    <div style={{ flex: '1 0 300px' }}>
        <div style={{
            border: '1px solid rgba(0, 0, 0, 0.12)',
            padding: '24px'
        }}>
            <h1 style={{
                fontSize: '14px',
                margin: '8px 0'
            }}>Destination: {destination}</h1>
            <p>
                Price: {price}
            </p>
        </div>
    </div>
)

export default Journey;

