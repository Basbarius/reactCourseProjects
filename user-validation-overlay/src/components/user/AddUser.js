import React, { useState } from 'react'

import styles from './AddUser.module.css'
import Card from '../ui/Card'
import Button from '../ui/Button'
import ErrorModal from '../ui/ErrorModal'

const AddUser = props => {
    const [enteredInput, setEnteredInput] = useState({username: '', age: ''})
    const [error, setError] = useState();

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
        if(enteredInput.username.length === 0 || enteredInput.age.length === 0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values)'
            })
            return;
        }
        if(+enteredInput.age < 1 || +enteredInput.age > 150){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid age (0 < age < 150)'
            })
            return;
        }

        const newUser = {
            id: Math.random().toString(),
            ...enteredInput,
        }
        setEnteredInput({username: '', age: ''})
        props.onAddUser(newUser);
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} resetError={errorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={enteredInput.username} onChange={userInputHandler}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" name="age" value={enteredInput.age} onChange={userInputHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser
