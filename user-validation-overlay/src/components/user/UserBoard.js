import React from 'react'

import User from './User'

const UserBoard = props => {
    return (
        <div>
            {
                props.users.map(user => {
                    return <User key={user.id} username={user.username} age={user.age}/>
                })
            }
        </div>
    )
}

export default UserBoard
