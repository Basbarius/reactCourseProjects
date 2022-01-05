import React, { useState, useRef } from 'react'

import styles from './AddUser.module.css'
import Card from '../ui/Card'
import Button from '../ui/Button'
import ErrorModal from '../ui/ErrorModal'

const AddUser = props => {
    const usernameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const submitHandler = event => {
        event.preventDefault();
        const username = usernameInputRef.current.value;
        const age = ageInputRef.current.value;
        if(username.length === 0 || age.length === 0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values)'
            })
            return;
        }
        if(+age < 1 || +age > 150){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid age (0 < age < 150)'
            })
            return;
        }

        const newUser = {
            id: Math.random().toString(),
            username: username,
            age: age
        }
        usernameInputRef.current.value = '';
        ageInputRef.current.value = '';
        props.onAddUser(newUser);
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} resetError={errorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" 
                        ref={usernameInputRef} 
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" name="age" 
                        ref={ageInputRef} 
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser
