import React from 'react'

const User = props => {
    return (
        <div>
            <h2>{`${props.username} (${props.age} years old)`}</h2>
        </div>
    )
}

export default User
