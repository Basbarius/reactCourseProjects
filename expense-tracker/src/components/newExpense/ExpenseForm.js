import React, { useState } from 'react'

import './ExpenseForm.css';

const ExpenseForm = () => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const inputChangeHandler = (event) => {
        setUserInput((prevState) =>{
            return {
                ...prevState, 
                [event.target.name]:event.target.value
            }
        });
    }


    return (
        <form>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                    <label>Title</label>
                    <input type="text" name="enteredTitle" onChange={inputChangeHandler}/>
                </div>
                <div className="new-expense_control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" name="enteredAmount" onChange={inputChangeHandler}/>
                </div>
                <div className="new-expense_control">
                    <label>Cost</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" name="enteredDate" onChange={inputChangeHandler}/>
                </div>
            </div>
            <div className="new-expense_actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
