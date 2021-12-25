import React, { useState } from 'react'

import Card from '../ui/Card'
import ExpenseForm from './ExpenseForm'

import './NewExpense.css'

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
    const [isEditingForm, setIsEditingForm] = useState(false);

    const toggleFormEditing = () => {
        setIsEditingForm(prevState => {
            return !prevState;
        });
    }

    return (
        <Card className="new-expense">
            {!isEditingForm && <button type="button" onClick={toggleFormEditing} >Add New Expense</button>}
            {isEditingForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} toggleExpenseFormDisplay={toggleFormEditing} />}
        </Card>
    )
}

export default NewExpense
