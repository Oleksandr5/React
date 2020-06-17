import React from 'react'

const willClass = (Component, className) => {
    return props => {
        return (
            <div className = {className}>
                <Component {...props} />
            </div>
        )
    }       
}

export default willClass