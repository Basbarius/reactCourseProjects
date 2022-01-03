import React, { useState } from 'react'

import styles from './AddUser.module.css'
import Card from '../ui/Card'
import Button from '../ui/Button'

const AddUser = props => {
    const [enteredInput, setEnteredInput] = useState({username: '', age: ''})

    const fieldsAreEmpty = () => {
        return enteredInput.username.length === 0 || enteredInput.age.length === 0;
    }

    const ageIsInvalid = () => {
        return +enteredInput.age < 1 || +enteredInput.age > 150;
    }

    const userInputHandler = event => {
        setEnteredInput(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    const submitHandler = event => {
        event.preventDefault();
        if(fieldsAreEmpty() || ageIsInvalid())
            return;
        const newUser = {
            id: Math.random().toString(),
            ...enteredInput,
        }
        setEnteredInput({username: '', age: ''})
        props.addNewUser(newUser);
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={enteredInput.username} onChange={userInputHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input type="number" name="age" value={enteredInput.age} onChange={userInputHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser
