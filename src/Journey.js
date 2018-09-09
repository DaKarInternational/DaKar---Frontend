import React from 'react'

import './Journey.css'

const Journey = (props) => (
    <div>
        <div>
            Destination : {props.destination}
        </div>
        <div>
            Price : {props.price}
        </div>
    </div>
)

export default Journey