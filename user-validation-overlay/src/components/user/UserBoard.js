import React from 'react'

import Card from '../ui/Card'
import styles from './UserBoard.module.css'

const UserBoard = props => {
    return (
        <Card className={styles.users}>
            <ul>
                {
                    props.users.map(user => {
                        return <li key={user.id}>{`${user.username} (${user.age} years old)`}</li>
                    })
                }
            </ul>
        </Card>
    )
}

export default UserBoard
