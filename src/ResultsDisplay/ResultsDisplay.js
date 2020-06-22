import React from 'react'
import PropTypes from 'prop-types'

export const ResultsDisplay = ({display}) => {
    return (
        <div>
          <p title="result-display">{display}</p>  
        </div>
    )
}

ResultsDisplay.propTypes = {
    display: PropTypes.string,
}