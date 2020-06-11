import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({ label, onClick}) => {
    return (
        <div className='button' onClick={onClick}>
            <p>{label}</p>
        </div>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}
