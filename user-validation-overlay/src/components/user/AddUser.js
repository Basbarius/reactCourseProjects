import React, { useState } from 'react'

const AddUser = props => {
    const [enteredInput, setEnteredInput] = useState({username: '', age: ''})

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
        const newUser = {
            id: Math.random().toString(),
            ...enteredInput,
        }
        props.addNewUser(newUser);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <h2>Username</h2>
                <input type="text" name="username" onChange={userInputHandler}/>
                <h2>Age (Years)</h2>
                <input type="text" name="age" onChange={userInputHandler}/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default AddUser
