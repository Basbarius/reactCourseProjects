import React from 'react'

import Card from '../ui/Card'
import ExpenseForm from './ExpenseForm'

import './NewExpense.css'

const NewExpense = () => {
    return (
        <Card className="new-expense">
            <ExpenseForm />
        </Card>
    )
}

export default NewExpense
