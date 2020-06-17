import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '@material-ui/core'

export const Catagories = catagories => {
    return (
        <Card raised={true}>
           <ul>
            {catagories.map((item, index) => (
                <li key="index">{item}</li>
            ))}
           </ul> 
        </Card>
    )
}

Catagories.propTypes = {
    catagories: PropTypes.array.isRequired,
}

